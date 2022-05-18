import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'

import { GraphQLContext } from '../types'
import { PassportUserFields } from './types'

@Injectable({ scope: Scope.REQUEST })
export class SessionService {
  constructor(@Inject(REQUEST) private readonly context: GraphQLContext) {}

  currentUserCredentials(): PassportUserFields | undefined {
    return (this.context.req as any).user
  }

  currentUserId(): number | undefined {
    return (this.context.req as any).user?.id
  }
}
