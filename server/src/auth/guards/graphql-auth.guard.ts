import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { JsonWebTokenError } from 'jsonwebtoken'

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const graphqlContext = GqlExecutionContext.create(context)
    return graphqlContext.getContext().req
  }

  handleRequest(err, user, info, _context, _status) {
    if (err) {
      throw err
    }
    if (info && info instanceof Error) {
      if (info instanceof JsonWebTokenError) {
        info = String(info)
      }
      throw new UnauthorizedException(info)
    }

    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
