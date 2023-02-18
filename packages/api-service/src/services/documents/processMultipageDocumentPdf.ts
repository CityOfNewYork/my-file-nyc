import { EnvironmentVariable, requireConfiguration } from '@/config'
import { deleteMessages } from '@/utils/sqs'
import { parseAndValidate } from '@/utils/validation'
import {
  downloadObject,
  getObjectReadStream,
  uploadObject,
  uploadObjectStream,
} from '@/utils/s3'
import { generatePDF } from '@/utils/pdf'
import { SQSEvent } from 'aws-lambda'
import {
  AssembleMultipageDocumentRequest,
  assembleMultipageDocumentRequestSchema,
} from './validation'
import { wrapAsyncHandler } from '@/utils/sentry'
import { logger } from '@/utils/logging'
import { flatMap, uniq } from 'lodash'
import { getDocumentById } from '@/models/document'
import { getFilesByDocumentId } from '@/models/file'
import path from 'path'
import streamBuffers from 'stream-buffers'
import { WriteStream } from 'fs'
import { Duplex } from 'stream'
import { connectDatabase } from '@/utils/database'

const getQueueUrl = () =>
  requireConfiguration(
    EnvironmentVariable.MULTIPAGE_DOCUMENT_ASSEMBLY_PROCESSOR_SQS_QUEUE_URL,
  )

connectDatabase()

export const handler = wrapAsyncHandler(
  async (event: SQSEvent) => {
    console.log('Additional Logging...')
    console.log(event)
    console.log(process.env)
    for (const record of event.Records) {
      const {
        error,
        value: assembleRequest,
      } = parseAndValidate<AssembleMultipageDocumentRequest>(
        record.body,
        assembleMultipageDocumentRequestSchema,
      )
      if (error) {
        logger.error(
          error,
          'Error occurred validating record. Message will be removed from queue.',
          record,
        )
        await deleteMessages(getQueueUrl(), [record])
        continue
      }

      const document = await getDocumentById(assembleRequest.documentId)
      const documentFiles = await getFilesByDocumentId(document!.id)
      const pdf = await generatePDF(
        document,
        documentFiles,
        document?.ownerId,
        `${document?.id}-pdf`,
      )
      console.log(
        `pdf processing complete... uploading pdf to bucket as key: ${
          document!.id
        }`,
      )
      // const readableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
      //   frequency: 10,
      //   chunkSize: 2048,
      // })
      // readableStreamBuffer.put(Buffer.from(pdf))
      // const writeStream = new WriteStream()
      // const duplexStream = new Duplex()
      // readableStreamBuffer.pipe(duplexStream)
      const uploadResponse = await uploadObjectStream(
        pdf.buffer,
        `/documents/${document!.id}.pdf`,
      )
      console.log(`s3 upload pdf response: 
      ${JSON.stringify(uploadResponse, null, 2)}
      `)
      await deleteMessages(getQueueUrl(), [record])
    }
  },
  {
    rethrowAfterCapture: true,
  },
)
