import { S3Event } from 'aws-lambda'
import { markFileReceived } from '@/models/file'
import { connectDatabase } from '@/utils/database'
import { File, getFilesByDocumentId } from '@/models/file'
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
        console.log(
          `related document for this file:\n${JSON.stringify(
            document,
            null,
            2,
          )}`,
        )
        console.log(`isMultipage?: ${document?.isMultipageDocument}`)
        if (document && document.isMultipageDocument) {
          const documentFiles = await getFilesByDocumentId(document.id)
          console.log(
            `document files:\n${JSON.stringify(documentFiles, null, 2)}`,
          )
          const multipageDocStillPendingFiles = documentFiles.some(
            (f) => !f.received,
          )
          console.log(`pending files?: ${multipageDocStillPendingFiles}`)
          if (!multipageDocStillPendingFiles) {
            const queueUrl = getQueueUrl()
            console.log(`queue url: ${queueUrl}`)
            const messageResponse = await putMessage(
              { documentId: document.id },
              queueUrl,
              {
                MessageGroupId: document.id,
              },
            )
            console.log(
              `put message response: ${JSON.stringify(
                messageResponse,
                null,
                2,
              )}`,
            )
          }
        }
        files.push(file)
      }
    }
    return { files }
  },
)

export default handler
