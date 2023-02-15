import { EnvironmentVariable, requireConfiguration } from '@/config'
import { deleteMessages } from '@/utils/sqs'
import { parseAndValidate } from '@/utils/validation'
import { downloadObject, getObjectReadStream, uploadObject } from '@/utils/s3'
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
import path from 'path'

const getQueueUrl = () =>
  requireConfiguration(
    EnvironmentVariable.MULTIPAGE_DOCUMENT_ASSEMBLY_PROCESSOR_SQS_QUEUE_URL,
  )

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
      const pdf = await generatePDF(
        document,
        document?.ownerId,
        `${document?.id}-pdf`,
      )
      await deleteMessages(getQueueUrl(), [record])
    }
  },
  {
    rethrowAfterCapture: true,
  },
)
