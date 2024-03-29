/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { api } from '@/plugins/api-accessor'
import axios, { AxiosResponse } from 'axios'
import {
  Document,
  DocumentFile,
  DocumentListItem,
  DocumentUpdate,
  FileDownloadDispositionTypeEnum,
} from 'api-client'
import { UserRole } from '@/types/user'
import { userStore } from '@/plugins/store-accessor'

export type UpdateDocumentInput = DocumentUpdate & { id: string }

@Module({
  name: 'document',
  stateFactory: true,
  namespaced: true,
})
export default class DocumentStore extends VuexModule {
  @Action
  getById(id: string): Promise<Document> {
    return api.document
      .getDocumentById(id)
      .then((response: AxiosResponse<Document>) => response.data)
  }

  @Action
  update(document: UpdateDocumentInput): Promise<AxiosResponse<void>> {
    return api.document.updateDocumentById(document.id, {
      name: document.name,
      description: document.description,
    })
  }

  @Action
  download(payload: {
    document: Document
    disposition: FileDownloadDispositionTypeEnum | undefined
  }): Promise<string[]> {
    const { document, disposition } = payload
    return Promise.all(
      document.files.map((file, i) =>
        api.document
          .downloadDocumentFileById(
            document.id,
            file.id,
            disposition ?? FileDownloadDispositionTypeEnum.Attachment,
          )
          .then((r) => {
            this.$ga.event({
              eventCategory: 'document_accessed',
              eventAction: `file-${i + 1}-of-${document.files.length}`,
              eventLabel: UserRole[userStore.role!],
            })
            return r.data.href
          }),
      ),
    )
  }

  @Action
  downloadFile(payload: {
    document: Document
    file: DocumentFile
    disposition: FileDownloadDispositionTypeEnum | undefined
  }): Promise<string> {
    const {
      document,
      file,
      disposition = FileDownloadDispositionTypeEnum.Attachment,
    } = payload
    return api.document
      .downloadDocumentFileById(document.id, file.id, disposition)
      .then((r) => {
        this.$ga.event({
          eventCategory: 'document_accessed',
          eventAction: disposition,
          eventLabel: UserRole[userStore.role!],
        })
        return r.data.href
      })
  }

  @Action
  delete(document: Document | DocumentListItem): Promise<AxiosResponse<void>> {
    return api.document.deleteDocumentById(document.id)
  }

}
