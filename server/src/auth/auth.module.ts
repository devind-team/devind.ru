import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from 'src/prisma.service'
import { TokenResolver } from './auth.resolver'

import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { AuthRepository } from './session.repository'
import { SessionService } from './session.service'

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY
    })
  ],
  providers: [
    TokenResolver,
    AuthService,
    SessionService,
    JwtStrategy,
    PrismaService,
    AuthRepository
  ],
  exports: [AuthService, SessionService]
})
export class AuthModule {}
