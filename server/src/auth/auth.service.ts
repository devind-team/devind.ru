import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { randomBytes } from 'node:crypto'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { AuthRepository } from './session.repository'

/**
 * Authentication service.
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly appEnvironment: ConfigService,
    private readonly authRepository: AuthRepository
  ) {}

  async refreshSession(refreshToken: string) {
    const token = await this.authRepository.findUniqueToken({
      where: { refresh: refreshToken },
      include: {
        session: { select: { user: { select: { id: true, email: true } } } }
      }
    })
    if (token.revoked) {
      throw new UnauthorizedException(null, 'Revoked token')
    }
    const result = await this.generateToken({
      id: token.session.user.id,
      email: token.session.user.email
    })
    await this.authRepository.updateManyTokens({
      data: { revoked: true },
      where: { sessionId: token.sessionId }
    })
    await this.authRepository.createToken({
      data: {
        sessionId: token.sessionId,
        jwt: result.accessToken,
        refresh: result.refreshToken,
        revoked: false
      }
    })
    return result
  }

  /**
   * Returns accessToken.
   */
  async createSession(user: Pick<User, 'id' | 'email'>) {
    const result = await this.generateToken(user)
    await this.authRepository.createSession({
      data: {
        userId: user.id,
        metadata: '',
        tokens: {
          create: {
            jwt: result.accessToken,
            refresh: result.refreshToken,
            revoked: false
          }
        }
      }
    })
    return result
  }

  private async generateToken(user: Pick<User, 'id' | 'email'>) {
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
