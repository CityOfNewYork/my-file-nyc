import { connectDatabase } from '@/utils/database'
import { wrapAsyncHandler } from '@/utils/sentry'
import { updateScanStatusByPath as updateFileScanStatusByPath } from '@/models/file'
import { updateScanStatusByDocumentId as updateDocumentScanStatusByDocumentId } from '@/models/document'

connectDatabase()

export interface FileScannedResponse {
  fileName: string
  scanStatus: string
}

export const handler = wrapAsyncHandler(
  async (parameters: any): Promise<any> => {

    const { fileName, scanStatus } = parameters['detail']['responsePayload']

    const file = await updateFileScanStatusByPath({
      path: fileName,
      scanStatus,
    })

    await updateDocumentScanStatusByDocumentId({
      documentId: file.documentId,
      scanStatus,
    })
  },
)

export default handler
