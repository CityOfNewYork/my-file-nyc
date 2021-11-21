import { connectDatabase } from '@/utils/database'
import { wrapAsyncHandler } from '@/utils/sentry'
import { updateScanStatusByFileId } from '@/models/file'
connectDatabase()

export interface FileScannedResponse {
  fileName: string
  scanStatus: string
}

export const handler = wrapAsyncHandler(
  async (parameters: FileScannedResponse): Promise<any> => {
    const { fileName, scanStatus } = parameters

    console.log('fileName', fileName)
    console.log('scanStatus', scanStatus)

    await updateScanStatusByFileId({
      fileId: fileName,
      scanStatus,
    })
  },
)

export default handler
