import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { randomBytes } from 'node:crypto'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'

/**
 * Authentication service.
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly appEnvironment: ConfigService
  ) {}

  /**
   * Returns accessToken.
   */
  async session(user: Pick<User, 'id' | 'email'>) {
    const date = new Date()

    const payload = {
      sub: user.id,
      email: user.email
    }

    const accessTokenExpiresIn = this.appEnvironment.get<number>(
      'ACCESS_TOKEN_EXPIRES'
    )
    const refreshTokenExpiresIn = this.appEnvironment.get<number>(
      'REFRESH_TOKEN_EXPIRES'
    )

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: accessTokenExpiresIn / 1000
      }),
      refreshToken: randomBytes(Math.random() * 20 + 20).toString('hex'),
      accessTokenExpiresAt: date.getTime() + accessTokenExpiresIn,
      refreshTokenExpiresAt: date.getTime() + refreshTokenExpiresIn
    }
  }
}
