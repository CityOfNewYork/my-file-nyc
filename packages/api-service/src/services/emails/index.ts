import { EnvironmentVariable, requireConfiguration } from '@/config'
import { User } from '@/models/user'
import { putMessage } from '@/utils/sqs'
import { SendRequest } from './validation'

const getQueueUrl = () =>
  requireConfiguration(EnvironmentVariable.EMAIL_PROCESSOR_SQS_QUEUE_URL)

const sendEmailRequest = async (sendRequest: SendRequest) => {
  await putMessage(sendRequest, getQueueUrl(), {
    MessageGroupId: sendRequest.template,
  })
}

type SendSharedCollectionOptions = {
  ownerUser: User
  isQAUser: boolean
  emails: string[]
  collection: {
    name: string
    link: string
  }
  numberOfDocuments: number
}

export const queueSharedCollectionNotification = async (
  opts: SendSharedCollectionOptions,
) => {
  const { emails, collection, ownerUser, numberOfDocuments, isQAUser } = opts
  const scrubbedEmails = emails
    .map((email: string) => {
      console.log(`incoming email: ${email}`)
      if (email.startsWith('myfile.sharedinbox@') && isQAUser) {
        return email.replace('myfile.', 'myfile-qa.')
      }
      return email
    })
  await sendEmailRequest({
    template: 'collectionSharedNotification',
    toAddresses: scrubbedEmails,
    subject: `You’ve received new documents`,
    data: collection,
    isQAUser,
  })
  await sendEmailRequest({
    template: 'collectionSharedNotificationOwnerAcknowledgement',
    toAddresses: [ownerUser.email as string],
    subject: 'My File Shared Document Receipt',
    data: {
      toEmailList: scrubbedEmails.join(', '),
      numberOfDocuments,
    },
    isQAUser,
  })
}

type SendDelegateUserInvitationOptions = {
  email: string
  userName: string
  acceptLink: string
  isQAUser?: boolean
}

export const queueDelegateUserInvitation = async (
  opts: SendDelegateUserInvitationOptions,
) => {
  const { email, userName, acceptLink, isQAUser = false } = opts
  await sendEmailRequest({
    template: 'delegateUserInvite',
    toAddresses: [email],
    subject: `You’ve been given access to a client account`,
    data: {
      name: userName,
      link: acceptLink,
    },
    isQAUser,
  })
}
