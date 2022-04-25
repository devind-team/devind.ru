import { Module } from '@nestjs/common'

import { UserResolver } from './user.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  imports: [],
  providers: [UserResolver, PrismaService]
})
export class UserModule {}
