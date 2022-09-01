import { User as ApiUser } from 'api-client'
import { requirePathParameter } from '@/utils/api-gateway'
import { connectDatabase } from '@/utils/database'
import { APIGatewayRequest, setContext } from '@/utils/middleware'
import {
  requirePermissionToUser,
  UserPermission,
} from '@/services/users/authorization'
import { User } from '@/models/user'
import { userToApiUser } from '@/services/users'
import { createCustomAuthenticatedApiGatewayHandler } from '@/services/users/middleware'

connectDatabase()

type Request = APIGatewayRequest & {
  user: User
}

export const handler = () => {
  return { msg: 'not implemented' };
}
