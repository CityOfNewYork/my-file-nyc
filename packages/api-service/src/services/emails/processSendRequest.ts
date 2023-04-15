import { EnvironmentVariable, requireConfiguration } from '@/config'
import { deleteMessages } from '@/utils/sqs'
import { parseAndValidate } from '@/utils/validation'
import { SQSEvent } from 'aws-lambda'
import { SendRequest, sendRequestSchema } from './validation'
import { sendEmail } from './emailSender'
import { wrapAsyncHandler } from '@/utils/sentry'
import { logger } from '@/utils/logging'
import { flatMap, uniq } from 'lodash'

const getQueueUrl = () =>
  requireConfiguration(EnvironmentVariable.EMAIL_PROCESSOR_SQS_QUEUE_URL)

type EmailSendConfig = {
  to: Array<string>
  cc?: Array<string>
}

export const handler = wrapAsyncHandler(
  async (event: SQSEvent) => {
    console.log('Additional Logging...')
    console.log(event)
    console.log(process.env)
    for (const record of event.Records) {
      const { error, value: sendRequest } = parseAndValidate<SendRequest>(
        record.body,
        sendRequestSchema,
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

      // read out message data
      const { toAddresses, template, data, subject, isQAUser } = sendRequest

    // shared inbox & qa user check
    const sharedInboxConfig = isQAUser
      ? (JSON.parse(
          requireConfiguration(EnvironmentVariable.SHARED_INBOX_CONFIG_QA),
        ) as Record<string, Array<string>>)
      : (JSON.parse(
          requireConfiguration(EnvironmentVariable.SHARED_INBOX_CONFIG),
        ) as Record<string, Array<string>>)

      // shared inbox check
      // const sharedInboxConfig = JSON.parse(requireConfiguration(EnvironmentVariable.SHARED_INBOX_CONFIG)) as Record<string, Array<string>>
      const flatListOfSharedInboxRecipients = uniq(flatMap(Object.values(sharedInboxConfig)))
      const sharedInboxList = Object.keys(sharedInboxConfig)
      const emailSendList: Array<EmailSendConfig> = []
      toAddresses.forEach((address) => {
        if (!flatListOfSharedInboxRecipients.includes(address) && !sharedInboxList.includes(address)) {
          emailSendList.push({
            to: [address],
          })
        } else if (sharedInboxList.includes(address)) {
          emailSendList.push({
            to: [address],
            cc: sharedInboxConfig[address],
          })
        }
      })

      // send the emails individually to each recipient
      await Promise.all(
        emailSendList.map(({ to, cc }) =>
          sendEmail({
            template,
            destination: {
              ToAddresses: to,
              CcAddresses: cc || []
            },
            subject,
            data,
            forceSend: true,
          }),
        ),
      )
      await deleteMessages(getQueueUrl(), [record])
    }
  },
  {
    rethrowAfterCapture: true,
  },
)
