import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserRepository {
  update = this.prisma.user.update
  findUnique = this.prisma.user.findUnique
  findMany = this.prisma.user.findMany
  create = this.prisma.user.create
  count = this.prisma.user.count

  constructor(private readonly prisma: PrismaService) {}
}
