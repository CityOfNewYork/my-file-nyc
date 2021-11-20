import { connectDatabase } from '@/utils/database'
import { wrapAsyncHandler } from '@/utils/sentry'

connectDatabase()

export interface FileScannedResponse {
  fileName: string
  scanStatus: string
}

export const handler = wrapAsyncHandler(
  async (event: FileScannedResponse): Promise<any> => {
    const { fileName, scanStatus } = event

    console.log('fileName', fileName)
    console.log('scanStatus', scanStatus)

    const updatedDate = new Date()
  },
)

export default handler
