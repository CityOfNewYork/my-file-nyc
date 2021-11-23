import { connectDatabase } from '@/utils/database'
import { wrapAsyncHandler } from '@/utils/sentry'
import { updateScanStatusByDocumentId as updateFileScanStatusByDocumentId } from '@/models/file'
import { updateScanStatusByDocumentId as updateDocumentScanStatusByDocumentId } from '@/models/document'

connectDatabase()

export interface FileScannedResponse {
  fileName: string
  scanStatus: string
}

export const handler = wrapAsyncHandler(
  async (parameters: FileScannedResponse): Promise<any> => {
    const { fileName, scanStatus } = parameters

    const file = await updateFileScanStatusByDocumentId({
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
