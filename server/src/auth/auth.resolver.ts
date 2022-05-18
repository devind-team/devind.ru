import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { RefreshSessionArgs, TokenType } from './types'

@Resolver()
export class TokenResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => TokenType)
  async refreshSession(@Args() data: RefreshSessionArgs) {
    return this.authService.refreshSession(data.data.refreshToken)
  }
}
