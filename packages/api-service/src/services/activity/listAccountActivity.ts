import { Activity, ActivityList } from 'api-client'
import {
  getQueryStringParameter,
  requirePathParameter,
} from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { APIGatewayRequest, setContext } from '@/utils/middleware'
import {
  requirePermissionToUser,
  UserPermission,
} from '@/services/users/authorization'
import { createAuthenticatedApiGatewayHandler } from '@/services/users/middleware'
import { User } from '@/models/user'
import { getLogEvents, GetLogEventsResponse } from '@/utils/logstream'
import { EnvironmentVariable, requireConfiguration } from '@/config'
import { hasValue } from '@/utils/array'
import { parseAndValidate } from '@/utils/validation'
import { submitActivitySchema } from './validation'
import { logger } from '@/utils/logging'
import { getAuditLogByUserId } from '@/models/auditLog'

connectDatabase()
type Request = APIGatewayRequest & {
  ownerId: string
  user: User
}

export const handler = createAuthenticatedApiGatewayHandler(
  setContext('ownerId', (r) => requirePathParameter(r.event, 'userId')),
  requirePermissionToUser(UserPermission.ListActivity),
  async (request: APIGatewayRequest): Promise<ActivityList> => {
    const { ownerId } = request as Request
    const events = await getAuditLogByUserId(ownerId);
    const activity = events
      .map(e => {
        const { requestContext, ...activity } = JSON.parse(e.eventData);
        return activity as Activity;
      })
    return {
      activity,
      nextToken: null,
    }
  },
)
