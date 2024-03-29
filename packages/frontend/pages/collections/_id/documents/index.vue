<template>
  <div v-if="loading">
    <v-skeleton-loader
      class="ma-2"
      type="list-item-three-line, image, list-item"
    />
  </div>
  <div v-else class="px-sm-8 pt-8 blue-super-light">
    <ApplicationHeader />

    <AppBar :custom-mobile-nav="true" :breadcrumbs="breadcrumbs">
      <template v-if="$vuetify.breakpoint.xs" v-slot:nav-action>
        <BackButton
          :class="$vuetify.breakpoint.smAndDown ? 'mt-16' : ''"
          tabindex="0"
        />
      </template>
      <template v-if="!userStore.isAgent" v-slot:actions>
        <v-btn
          v-if="userStore.isClient && $vuetify.breakpoint.smAndUp"
          text
          class="white--text"
          :to="localePath('/account')"
        >
          <v-icon left>$cog</v-icon>
          {{ $t('navigation.account') }}
        </v-btn>
        <template v-if="$vuetify.breakpoint.xs">
          <ShareButton class="float-right my-2" />
          <UploadButton prepend-icon="$plus" class="float-right ml-2" />
        </template>
      </template>
      <!-- <template
        v-if="$vuetify.breakpoint.smAndUp && !userStore.isAgent"
        v-slot:actionsBeneath
      >
        <ShareButton class="float-right my-2" />
        <UploadButton prepend-icon="$plus" class="float-right ml-2 my-2" />
      </template> -->
      <template v-if="$vuetify.breakpoint.xs && collection" v-slot:extensions>
        <div class="text-heading-2 pl-4 pb-4 mt-15">
          <template v-if="collection.numberOfDocuments > 1">
            {{
              $t('sharedFolder.folderName', {
                num: collection.numberOfDocuments,
                date: format(new Date(collection.createdDate), 'MM/dd/yyyy'),
                time: format(new Date(collection.createdDate), 'hh:mm a'),
              })
            }}
          </template>
          <template v-else-if="collection.numberOfDocuments === 1">
            {{
              $t('sharedFolder.folderNameWithOneDocument', {
                date: format(new Date(collection.createdDate), 'MM/dd/yyyy'),
                time: format(new Date(collection.createdDate), 'hh:mm a'),
              })
            }}
          </template>
          <template v-else>
            {{ $t('sharedFolder.emptyCollection') }}
          </template>
        </div>
      </template>
    </AppBar>
    <div v-if="loading">
      <v-skeleton-loader
        class="my-2"
        type="list-item-three-line, image, list-item"
      ></v-skeleton-loader>
    </div>
    <v-main v-else class="blue-super-light">
      <template v-if="documents.length">
        <DocumentList
          :fetch-documents="fetchDocuments"
          :owner="sharedCollection ? sharedCollection.owner : null"
        />
        <div v-if="$vuetify.breakpoint.xs && userStore.isAgent" class="pa-4">
          <v-btn
            block
            color="primary"
            @click="downloadZip"
            @keypress.enter="downloadZip"
          >
            <v-icon class="ml-2 mr-4" small left>$folder</v-icon>
            {{ $t('document.downloadZip') }}
          </v-btn>
          <v-divider class="my-8" />
          <SharedCollectionDetails
            v-if="sharedCollection"
            :collection="sharedCollection"
            class="px-8"
          />
        </div>
      </template>
      <template v-else>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
          "
        >
          <p class="d-flex justify-center">
            {{ $t('sharedFolder.emptyCollection') }}
          </p>
          <nuxt-link
            class="d-flex justify-center nuxt-link"
            :to="localePath('/dashboard')"
          >
            <v-btn text color="primary" class="body-1 font-weight-bold">
              {{ $t('sharedFolder.returnDashboard') }}
            </v-btn>
          </nuxt-link>
          <!-- <div v-if="collection">
          {{
            $t('sharedFolder.folderName', {
              num: collection.numberOfDocuments,
              date: format(new Date(collection.createdDate), 'MM/dd/yyyy'),
              time: format(new Date(collection.createdDate), 'hh:mm a'),
            })
          }}
        </div> -->
        </div>
      </template>
      <DesktopSideBar v-if="userStore.isAgent">
        <template v-if="userStore.isAgent">
          <template v-if="documents.length">
            <v-btn
              block
              color="primary"
              @click="downloadZip"
              @keypress.enter="downloadZip"
            >
              <v-icon class="ml-2 mr-4" small left>$folder</v-icon>
              {{ $t('document.downloadZip') }}
            </v-btn>
            <v-divider class="my-8" />
          </template>
          <SharedCollectionDetails
            v-if="sharedCollection"
            :collection="sharedCollection"
            class="px-8 mt-5"
          />
        </template>
      </DesktopSideBar>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {
  Collection,
  CollectionListItem,
  DocumentListItem,
  DocumentsDownload,
  DocumentsDownloadStatusEnum,
  SharedCollectionListItem,
  User as ApiUser,
} from 'api-client'
import { userStore, snackbarStore } from '@/plugins/store-accessor'

import download from '@/assets/js/download'
import { Breadcrumb } from '@/types/nav'
import { DelegatedClient } from '@/types/delegate'
import { SharedCollectionListItem as TransformedSharedCollectionListItem } from '@/types/transformed'
import SnackParams from '@/types/snackbar'
import { format, parseISO } from 'date-fns'

@Component({
  head() {
    return {
      title: (this as ViewCollection).title,
    }
  },
  layout: 'empty',
})
export default class ViewCollection extends Vue {
  loading = true
  documents: DocumentListItem[] = []
  title = ''
  format = format
  date: any

  sharer: ApiUser | null
  userStore = userStore
  delegatedClient: DelegatedClient | null = null

  async mounted() {
    /* Ensure the user role is set from querystring role param if passed from incoming link */
    console.log('--- viewing shared document ---')
    const { role } = this.$route.query
    if (
      role &&
      parseInt(role as string) >= 0 &&
      parseInt(role as string) <= 2
    ) {
      // console.log('setting "entry-role" storage item')
      // localStorage.setItem('entry-role', role as string)
    }

    this.title = this.$t('tabTitles.shared') as string
    if (this.$route.query.owner !== userStore.ownerId && userStore.isCbo) {
      await userStore.setOwnerId(this.$route.query.owner as string)
    }
    const promises = [
      this.fetchDocuments().then((res: DocumentListItem[]) => {
        this.documents = res
      }),
      this.findCollection(),
      userStore.isCbo
        ? userStore
            .fetchImpersonatedDelegate()
            .then((d: DelegatedClient | null) => {
              this.delegatedClient = d
            })
        : Promise.resolve(),
    ]
    await Promise.all(promises)
    this.loading = false
  }

  fetchDocuments() {
    return this.$store.dispatch(
      'collection/getDocuments',
      this.$route.params.id,
    )
  }

  downloadZip() {
    snackbarStore.setParams({
      message: 'toast.downloadLoadingState',
      timeoutMilliseconds: 0,
    } as SnackParams)
    snackbarStore.setProgress(-1)
    snackbarStore.setVisible(true)

    this.$store
      .dispatch('collection/download', this.$route.params.id)
      .then((v: DocumentsDownload) => {
        download(v.fileDownload!.href, (this.name || 'collection') + '.zip')
        snackbarStore.setVisible(false)
      })
  }

  get collection(): CollectionListItem | null {
    return (
      (userStore.collections as CollectionListItem[]).find(
        (c) => c.id === this.$route.params.id,
      ) ?? null
    )
  }

  get sharedCollection(): TransformedSharedCollectionListItem | null {
    return (
      (userStore.sharedCollections as TransformedSharedCollectionListItem[]).find(
        (c) => c.collection.id === this.$route.params.id,
      ) ?? null
    )
  }

  async findCollection() {
    if (!this.collection) await userStore.getCollections()

    if (!this.collection) await userStore.getSharedCollections()
  }

  get name() {
    return this.date ?? this.sharedCollection?.collection?.name ?? ''
  }

  get collectionDate() {
    return (
      this.collection?.createdDate ??
      this.sharedCollection?.collection?.createdDate ??
      ''
    )
  }

  get collectionNumberOfDocuments() {
    return (
      this.collection?.numberOfDocuments ??
      this.sharedCollection?.collection?.numberOfDocuments ??
      ''
    )
  }

  get breadcrumbs() {
    const crumbs: Breadcrumb[] = []

    if (this.$vuetify.breakpoint.xs) {
      return crumbs
    }

    if (userStore.isClient) {
      crumbs.push({
        title: 'navigation.dashboard',
        to: '/dashboard',
      })
    } else if (userStore.isAgent) {
      crumbs.push({
        title: 'navigation.clients',
        to: '/dashboard',
      })
    } else if (userStore.isCbo) {
      crumbs.push({
        title: 'navigation.clients',
        click: () => {
          userStore.clearOwnerId()
          this.$router.push(this.localePath('/dashboard'))
        },
      })
    }

    if (this.delegatedClient) {
      crumbs.push({
        title: this.delegatedClient!.allowsAccessToUser.name,
        to: '/dashboard',
      })
    } else if (this.sharedCollection) {
      crumbs.push({
        title: this.sharedCollection.owner.name,
        to: `/collections/owner/${this.sharedCollection.owner.id}`,
      })
    }

    crumbs.push({
      title: this.name,
      numberOfDocuments: this.collectionNumberOfDocuments,
      date: this.collectionDate,
    })

    return crumbs
  }
}
</script>

<style lang="scss">
.container {
  max-width: none !important;
  padding-left: 0;
  padding-right: 0;
}

.v-toolbar__content {
  padding: 4px 9px !important;
}

// .v-toolbar__extension {
//   height: 80px !important;
// }
</style>
