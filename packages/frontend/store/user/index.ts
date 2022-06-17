import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { api } from '@/plugins/api-accessor'
import {
  ActivityList,
  Collection,
  SharedCollectionListItem as ClientSharedCollectionListItem,
  CollectionCreate,
  CollectionListItem,
  Document,
  DocumentListItem,
  FileContentTypeEnum,
  User as ApiUser,
  UserDelegatedAccessCreate,
  UserDelegatedAccess,
  UserDelegatedAccessStatus,
} from 'api-client'
import { SharedCollectionListItem } from '@/types/transformed'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { hashFile } from '@/assets/js/hash/'
import { UserRole } from '@/types/user'
import { Delegate, DelegatedClient } from '@/types/delegate'
import { differenceInDays, isBefore } from 'date-fns'

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class User extends VuexModule {
  /**
   * User ID is just the ID of the logged in user.
   * Owner ID could be the user's user ID, or it could be the user ID of an
   * account this user has delegate acccess to, hence the "resource owner ID"
   */
  _userId: string | null = null
  _ownerId: string | null = null

  _profile: ApiUser | null = null

  _documents: DocumentListItem[] = []
  _collections: CollectionListItem[] = []
  _sharedCollections: SharedCollectionListItem[] = []
  _timeoutId: number | null
  _role: UserRole | null = null

  get documents() {
    return this._documents
  }

  get collections() {
    return this._collections
  }

  get sharedCollections() {
    return this._sharedCollections
  }

  get userId() {
    return this._userId
  }

  get ownerId() {
    return this._ownerId || this._userId
  }

  get role() {
    return this._role
  }

  get isClient() {
    return this._role === UserRole.CLIENT
  }

  get isAgent() {
    return this._role === UserRole.AGENT
  }

  get isCbo() {
    return this._role === UserRole.CBO
  }

  get isActingAsDelegate(): boolean {
    return !!this._ownerId && this._userId !== this._ownerId
  }

  get profile() {
    return this._profile
  }

  @Mutation
  setUserId(userId: string) {
    this._userId = userId
  }

  @Mutation
  setOwnerId(ownerId: string) {
    this._ownerId = ownerId
  }

  @Mutation
  clearOwnerId() {
    this._ownerId = this._userId
  }

  @Action
  async fetchRole() {
    const storedRole = localStorage.getItem('myfile.role')

    if (storedRole !== null) {
      const role = parseInt(storedRole)
      if (isNaN(role) || !Object.keys(UserRole).includes(storedRole)) {
        await this.setRole(null)
      } else {
        await this.setRole(role)
      }
    } else {
      await this.setRole(UserRole.CLIENT)
    }
    return this._role
  }

  @Mutation
  _setRole(role: UserRole | null) {
    this._role = role
  }

  @Action({ commit: '_setRole' })
  setRole(role: UserRole | null) {
    if (role === null) {
      localStorage.removeItem('myfile.role')
      return null
    } else {
      localStorage.setItem('myfile.role', role.toString())
      return role
    }
  }

  @Mutation
  _setProfile(profile: ApiUser) {
    this._profile = profile
  }

  @Action({ rawError: true, commit: '_setProfile' })
  fetchProfile(): Promise<ApiUser> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    return api.user.getUser(this._userId).then((response) => {
      return response.data
    })
  }

  @Action({ rawError: true, commit: '_setProfile' })
  acceptTerms(registrationUser: ApiUser): Promise<ApiUser> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    return api.user
      .acceptTermsAndRegister(this._userId, {
        familyName: registrationUser.familyName!,
        givenName: registrationUser.givenName!,
        dob: registrationUser.dob!,
        dhsCaseNumber: registrationUser.dhsCaseNumber!,
      })
      .then((response) => {
        this.$ga.event({
          eventCategory: 'terms_of_use_accepted',
          // eventAction: '', // TODO: we might want to track TOU version number here?
          eventLabel: UserRole[this._role!],
        })
        return response.data
      })
  }

  // TODO: Update after upload API changes
  @Action
  async uploadDocument({
    fileList,
    name,
    onUploadProgress = () => {
      // default empty function
    },
  }: {
    fileList: FileList
    name: string
    onUploadProgress?: (e: ProgressEvent) => void
  }): Promise<Document> {
    // FileList has a weird spec, with no iterator. This converts it to an array
    const files = Array.from(fileList)

    if (!files.length)
      return Promise.reject(new Error('Files must not be an empty list'))

    if (!this.ownerId) return Promise.reject(new Error('UserID not set'))

    for (const file of files) {
      if (file.size > Math.pow(10, 7))
        throw new Error(`File ${file.name} is too large`)
      else if (file.size <= 0) throw new Error(`File ${file.name} is empty`)
    }

    const hashes = await Promise.all(files.map(hashFile))

    const addResponse: AxiosResponse<Document> = await api.user.addUserDocument(
      this.ownerId,
      {
        name,
        files: files.map((file, i) => ({
          name: file.name,
          contentType: file.type as FileContentTypeEnum,
          sha256Checksum: hashes[i],
          contentLength: file.size,
        })),
      },
    )

    const axiosInstance = axios.create()
    // don't put our API token in the request otherwise we confuse AWS
    delete axiosInstance.defaults.headers.common.Authorization

    const totalUploadSize = files.reduce((sum, file) => sum + file.size, 0)
    const uploadProgress = new Array(files.length).fill(0)

    await Promise.all(
      addResponse.data.files.map((documentFile, i) => {
        const options: AxiosRequestConfig = {
          onUploadProgress: (e) => {
            uploadProgress[i] = e.loaded
            onUploadProgress(
              new ProgressEvent('upload', {
                loaded: uploadProgress.reduce((sum, val) => sum + val, 0),
                total: totalUploadSize,
              }),
            )
          },
        }

        const uploadLink = (documentFile.links as any[]).find(
          (l) => l.type === 'POST',
        )

        if (!uploadLink)
          return Promise.reject(
            new Error(
              `No upload link for file ${documentFile.name} (${documentFile.id})`,
            ),
          )

        const file = files.find(
          (_, i) => hashes[i] === documentFile.sha256Checksum,
        )
        if (!file)
          Promise.reject(
            new Error(
              `Corrupted hash for file ${documentFile.name} (${documentFile.id})`,
            ),
          )

        const formData = new FormData()
        Object.keys(uploadLink.includeFormData).forEach((key) =>
          formData.append(key, uploadLink.includeFormData[key]),
        )
        formData.append('file', file!)
        return axiosInstance.post(uploadLink.href, formData, options)
      }),
    )

    this.$ga.event({
      eventCategory: 'document_uploaded',
      eventAction: 'complete', // we might also want "upload started" or something
      eventLabel: UserRole[this._role!],
    })

    return addResponse.data
  }

  @Mutation
  setDocuments(documents: DocumentListItem[]) {
    this._documents = documents
  }

  @Mutation
  setCollections(collections: CollectionListItem[]) {
    this._collections = collections
  }

  @Mutation
  setSharedCollections(collections: SharedCollectionListItem[]) {
    this._sharedCollections = collections
  }

  @Action({ rawError: true, commit: 'setDocuments' })
  getDocuments(): Promise<DocumentListItem[]> {
    if (!this.ownerId) return Promise.reject(new Error('UserID not set'))
    return api.user.listUserDocuments(this.ownerId).then((response) => {
      return response.data.documents ? response.data.documents : []
    })
  }

  @Action({ rawError: true, commit: 'setCollections' })
  getCollections(): Promise<CollectionListItem[]> {
    if (!this.ownerId) return Promise.reject(new Error('UserID not set'))
    return api.user.listUserCollections(this.ownerId).then((response) => {
      return response.data.collections ? response.data.collections : []
    })
  }

  @Action({ rawError: true, commit: 'setSharedCollections' })
  getSharedCollections(): Promise<SharedCollectionListItem[]> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    return api.user.listUserCollectionsShared(this._userId).then((response) => {
      return (response.data.sharedCollections
        ? response.data.sharedCollections
        : []
      ).map(
        (c) =>
          (Object.assign({}, c, {
            collection: {
              ...c.collection,
              createdDate: new Date(c.collection.createdDate),
            },
          }) as unknown) as SharedCollectionListItem,
      )
    })
  }

  @Action({ rawError: true })
  async createCollection(payload: CollectionCreate): Promise<Collection> {
    if (!this.ownerId) return Promise.reject(new Error('UserID not set'))
    const { data } = await api.user.addUserCollection(this.ownerId, payload)
    const documents = await this.getDocuments()
    const dates = documents.map((d) => new Date(d.createdDate))
    const oldest = dates.reduce(
      (oldest, current) => (isBefore(current, oldest) ? current : oldest),
      dates[0],
    )
    const newest = dates.reduce(
      (newest, current) => (isBefore(current, newest) ? newest : current),
      dates[0],
    )
    const currentDate = Date.now()
    const daysSinceOldest = differenceInDays(currentDate, oldest)
    const daysSinceNewest = differenceInDays(currentDate, newest)
    this.$ga.event({
      eventCategory: 'collection_shared',
      eventAction: 'number_of_recipients',
      eventLabel: UserRole[this._role!],
      eventValue: payload.individualEmailAddresses.length,
    })
    this.$ga.event({
      eventCategory: 'collection_shared',
      eventAction: 'number_of_documents',
      eventLabel: UserRole[this._role!],
      eventValue: payload.documentIds.length,
    })
    this.$ga.event({
      eventCategory: 'collection_shared',
      eventAction: 'days_since_oldest_document',
      eventLabel: UserRole[this._role!],
      eventValue: daysSinceOldest,
    })
    this.$ga.event({
      eventCategory: 'collection_shared',
      eventAction: 'days_since_newest_document',
      eventLabel: UserRole[this._role!],
      eventValue: daysSinceNewest,
    })
    return data
  }

  /**
   * Fetches the list of users who have delegated access to logged in user's account
   */
  @Action({ rawError: true })
  async fetchDelegates(): Promise<Delegate[]> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    const { data } = await api.user.listAccountDelegates(this._userId)
    return data.delegatedAccess.filter(
      (d: UserDelegatedAccess) => !d.allowsAccessToUser,
    )
  }

  /**
   * Fetches a list of user whose accounts the logged in user has access to as a delegate
   */
  @Action({ rawError: true })
  async fetchDelegatedClients(): Promise<DelegatedClient[]> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    const { data } = await api.user.listAccountDelegates(this._userId)
    return data.delegatedAccess.filter(
      (d: UserDelegatedAccess) =>
        !!d.allowsAccessToUser && d.status === UserDelegatedAccessStatus.Active,
    ) as DelegatedClient[]
  }

  @Action
  async fetchImpersonatedDelegate(): Promise<DelegatedClient | null> {
    const clients = await this.fetchDelegatedClients()
    return (
      clients.find(
        (c: DelegatedClient) => c.allowsAccessToUser.id === this.ownerId,
      ) ?? null
    )
  }

  @Action({ rawError: true })
  async delegateAccess(
    payload: UserDelegatedAccessCreate,
  ): Promise<UserDelegatedAccess> {
    if (!this._userId) return Promise.reject(new Error('UserID not set'))
    const { data } = await api.user.addAccountDelegate(this._userId, payload)
    const delegates = await this.fetchDelegates()
    this.$ga.event({
      eventCategory: 'delegate_user_invited',
      eventAction: 'number_of_delegates',
      eventLabel: UserRole[this.role!],
      eventValue: delegates.length,
    })
    return data
  }

  @Action({ rawError: true })
  getActivity(payload: any): Promise<ActivityList> {
    const { id, token } = payload
    return api.user.listAccountActivity(id, token).then((response) => {
      return response.data
    })
  }
}
