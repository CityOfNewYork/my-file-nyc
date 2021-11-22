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

    await updateDocumentScanStatusByDocumentId({
      path: fileName,
      scanStatus,
    })

    await updateFileScanStatusByDocumentId({
      path: fileName,
      scanStatus,
    })
  },
)

export default handler
