import { ActivityActionTypeEnum } from 'api-client'
import messages from '@/assets/js/messages'

export interface ResourceMetadata {
  resourceId: string
  principalId: string
  date: number
}

// TODO: support i8n messages beyond English
export const ActivityResourceTypeEnumMessageMap: any = new Map([
  [ActivityActionTypeEnum.CollectionCreated, messages.en.activity.shared],
  [ActivityActionTypeEnum.DocumentCreated, messages.en.activity.added],
  [ActivityActionTypeEnum.DocumentAccessed, messages.en.activity.accessed],
  [ActivityActionTypeEnum.DocumentEdited, messages.en.activity.edited],
  [ActivityActionTypeEnum.DocumentDeleted, messages.en.activity.deleted],
  [ActivityActionTypeEnum.DelegateduserInvited, messages.en.activity.invited],
  [
    ActivityActionTypeEnum.DelegateduserInviteAccepted,
    messages.en.activity.delegateAcceptedClient,
  ],
  [
    ActivityActionTypeEnum.DelegateduserDeleted,
    messages.en.activity.delegateDeletedClient,
  ],
])

export const ActivityResourceTypeEnumIconMap: any = new Map([
  [ActivityActionTypeEnum.CollectionCreated, '$send'],
  [ActivityActionTypeEnum.DocumentCreated, '$plus'],
  [ActivityActionTypeEnum.DocumentAccessed, '$eye'],
  [ActivityActionTypeEnum.DocumentEdited, '$pencil'],
  [ActivityActionTypeEnum.DocumentDeleted, '$deleteAlt'],
  [ActivityActionTypeEnum.DelegateduserInvited, '$delegate'],
  [ActivityActionTypeEnum.DelegateduserInviteAccepted, '$delegate'],
  [ActivityActionTypeEnum.DelegateduserDeleted, '$delegate'],
])

// Whitelist of accepted activity actions to display on the UI
export const RegisteredActivityActionTypes: ActivityActionTypeEnum[] = [
  ActivityActionTypeEnum.CollectionCreated,
  ActivityActionTypeEnum.DocumentCreated,
  ActivityActionTypeEnum.DocumentAccessed,
  ActivityActionTypeEnum.DocumentEdited,
  ActivityActionTypeEnum.DocumentDeleted,
  ActivityActionTypeEnum.DelegateduserInvited,
  ActivityActionTypeEnum.DelegateduserInviteAccepted,
  ActivityActionTypeEnum.DelegateduserDeleted,
]
