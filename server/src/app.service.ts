import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { User, Group, Prisma } from '@prisma/client'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<User | null> {
    return this.prisma.user.findFirst()
  }
}
