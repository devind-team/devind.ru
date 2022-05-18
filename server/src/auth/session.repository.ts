import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AuthRepository {
  updateSession = this.prisma.session.update
  updateManySessions = this.prisma.session.updateMany
  findUniqueSession = this.prisma.session.findUnique
  findManySessions = this.prisma.session.findMany
  createSession = this.prisma.session.create
  countSession = this.prisma.session.count

  updateToken = this.prisma.token.update
  updateManyTokens = this.prisma.token.updateMany
  findUniqueToken = this.prisma.token.findUnique
  findManyTokens = this.prisma.token.findMany
  createToken = this.prisma.token.create
  countToken = this.prisma.token.count

  constructor(private readonly prisma: PrismaService) {}
}
