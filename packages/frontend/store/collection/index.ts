import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { api } from '@/plugins/api-accessor'
import {
  DocumentListItem,
  DocumentsDownload,
  DocumentsDownloadFormatEnum,
  DocumentsDownloadStatusEnum,
} from 'api-client'
import { AxiosResponse } from 'axios'

@Module({
  name: 'collection',
  stateFactory: true,
  namespaced: true,
})
export default class Collection extends VuexModule {
  @Action({ rawError: true })
  getDocuments(collectionId: string): Promise<DocumentListItem[]> {
    return api.collection
      .getCollectionDocuments(collectionId)
      .then((response) => {
        return response.data.documents ? response.data.documents : []
      })
  }

  @Action({ rawError: true })
  patchStatus({
    collectionId,
    status,
  }: {
    collectionId: string
    status: string
  }): Promise<void> {
    return api.collection
      .patchCollectionStatusById(collectionId, {
        status,
      })
      .then((response) => {})
      .catch((e) => {
        console.log(e)
      })
  }

  @Action({ rawError: true })
  download(collectionId: string): Promise<DocumentsDownload> {
    return new Promise<DocumentsDownload>((resolve) => {
      api.collection
        .downloadCollectionDocuments(collectionId, {
          format: DocumentsDownloadFormatEnum.Zip,
        })
        .then((res) => {
          const data = res.data
          if (data.status === DocumentsDownloadStatusEnum.Success) {
            resolve(data)
          } else {
            const poll = setInterval(() => {
              api.collection
                .getDownloadForCollectionDocuments(collectionId, data.id)
                .then((downloadResponse) => {
                  const downloadStatus = downloadResponse.data
                  if (
                    downloadStatus.status ===
                    DocumentsDownloadStatusEnum.Success
                  ) {
                    clearInterval(poll)
                    resolve(downloadStatus)
                  }
                })
            }, 5000)
          }
        })
    })
  }
}
