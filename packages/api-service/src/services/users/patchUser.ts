import { User as ApiUser } from 'api-client'
import { requirePathParameter } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { APIGatewayRequest, setContext } from '@/utils/middleware'
import {
  requirePermissionToUser,
  UserPermission,
} from '@/services/users/authorization'
import { updateUser, User } from '@/models/user'
import { userToApiUser } from '@/services/users'
import { createCustomAuthenticatedApiGatewayHandler } from '@/services/users/middleware'
import createError from 'http-errors'

connectDatabase()

type Request = APIGatewayRequest & {
  ownerId: string
  userId: string
  user: User
  givenName: string
  familyName: string
  dob: string
  dhsCaseNumber: string
}

export const handler = createCustomAuthenticatedApiGatewayHandler(
  { requireTermsOfUseAcceptance: false },
  setContext('ownerId', (r) => requirePathParameter(r.event, 'userId')),
  requirePermissionToUser(UserPermission.WriteUser),
  async (request: APIGatewayRequest): Promise<ApiUser> => {
    const {
      ownerId,
      user,
      event,
    } = request as Request

    const {
      dhsCaseNumber,
      dob,
      email,
      familyName,
      givenName,
    } = JSON.parse(event.body!) as ApiUser;

    const updatedUser = await updateUser(user.id, {
      familyName: familyName as string,
      givenName: givenName as string,
      dhsCaseNumber,
      dob,
      attributes: {
        termsOfUseAccepted: true,
      },
    })

    return userToApiUser(updatedUser)
  },
)
