import { EnvironmentVariable, requireConfiguration } from '@/config'
import { logger } from '@/utils/logging'
import { wrapAsyncHandler } from '@/utils/sentry'
import { deleteMessages } from '@/utils/sqs'
import { SQSEvent } from 'aws-lambda'
import groupBy from 'lodash/groupBy'


import { connectDatabase } from '@/utils/database'
import { createAuditLog } from '@/models/auditLog'

connectDatabase()

const queueUrl = requireConfiguration(
  EnvironmentVariable.ACTIVITY_RECORD_SQS_QUEUE_URL,
)

export const handler = wrapAsyncHandler(
  async (event: SQSEvent) => {
    // group by message group ID which is going to be our log stream name (should be the users ID)
    const groupedRecords = groupBy(
      event.Records,
      (r) => r.attributes.MessageGroupId,
    )

    // then process each group of messages
    for (const logStreamName in groupedRecords) {
      // get the records in the group
      const records = groupedRecords[logStreamName]
      try {
        for (let i=0; i<records.length; i++) {
          createAuditLog({ userId: logStreamName, eventData: JSON.stringify(records[i].body) });
        }
      } catch (ex) {
        logger.error(ex as Error, 'An error occurred putting log events')
        throw ex
      }
      // clean up messages in this group
      await deleteMessages(queueUrl, records)
    }
    return event.Records.length
  },
  {
    rethrowAfterCapture: true,
  },
)
