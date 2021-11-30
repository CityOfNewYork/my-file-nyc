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

    console.log('parameters', Object.keys(parameters));
    console.log('detail', parameters['detail']);
    console.log('responsePayload', Object.keys(parameters['detail']['responsePayload']));

    const { fileName, scanStatus } = parameters['detail']['responsePayload']

    console.log('fileName', fileName)
    console.log('scanStatus', scanStatus)

    const file = await updateFileScanStatusByPath({
      path: fileName,
      scanStatus,
    })

    console.log('step 2 complete')

    await updateDocumentScanStatusByDocumentId({
      documentId: file.documentId,
      scanStatus,
    })
  },
)

export default handler
