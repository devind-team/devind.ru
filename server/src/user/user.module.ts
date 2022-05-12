import { Module } from '@nestjs/common'

import { UserResolver } from './user.resolver'
import { PrismaService } from '../prisma.service'
import { UserService } from './user.service'
import { AuthService } from 'src/auth/auth.service'
import { UserRepository } from './user.repository'
import { AuthModule } from 'src/auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [AuthModule, ConfigModule],
  providers: [UserResolver, PrismaService, UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
