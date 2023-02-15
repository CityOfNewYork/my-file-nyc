import { S3Event } from 'aws-lambda'
import { markFileReceived } from '@/models/file'
import { connectDatabase } from '@/utils/database'
import { File } from '@/models/file'
import { getDocumentById } from '@/models/document'
import { wrapAsyncHandler } from '@/utils/sentry'
import { putMessage } from '@/utils/sqs'
import { EnvironmentVariable, requireConfiguration } from '@/config'

const getQueueUrl = () =>
  requireConfiguration(
    EnvironmentVariable.MULTIPAGE_DOCUMENT_ASSEMBLY_PROCESSOR_SQS_QUEUE_URL,
  )

connectDatabase()

export interface FilesReceivedResponse {
  files: File[]
}

export const handler = wrapAsyncHandler(
  async (event: S3Event): Promise<FilesReceivedResponse> => {
    const files: File[] = []
    for (const record of event.Records) {
      const filePath = record.s3.object.key
      const file = await markFileReceived(filePath)
      if (file) {
        // check if file contained in multipage document
        const document = await getDocumentById(file.documentId)
        if (document && document.isMultipageDocument) {
          const multipageDocStillPendingFiles = document.files?.some(
            (f) => !f.received,
          )
          if (!multipageDocStillPendingFiles) {
            putMessage({ documentId: document.id }, getQueueUrl())
          }
        }
        files.push(file)
      }
    }
    return { files }
  },
)

export default handler
