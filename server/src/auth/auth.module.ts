import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
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
  providers: [AuthService, SessionService, JwtStrategy],
  exports: [AuthService, SessionService]
})
export class AuthModule {}
