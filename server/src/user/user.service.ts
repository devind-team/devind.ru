import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { AuthService } from 'src/auth/auth.service'
import { UserRepository } from './user.repository'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UserService {
  private readonly saultRounds: number = 0

  constructor(
    private repo: UserRepository,
    private authService: AuthService,
    configService: ConfigService
  ) {
    this.saultRounds = Number(
      configService.get<string>('PASSWORD_SAULT_ROUNDS')
    )
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput
  ) {
    return this.repo.update({ where, data })
  }

  async create(data: Prisma.UserCreateInput) {
    return this.repo.create({ data })
  }

  async setPassword(user: User, password: string) {
    user.password = await bcrypt.hash(password, 10)
    return await this.update({ id: user.id }, user)
  }

  async signUp(data: Prisma.UserCreateInput) {
    data.password = await bcrypt.hash(data.password, this.saultRounds)
    return await this.create(data)
  }

  async signIn(email: string, password: string) {
    const user = await this.repo.findUnique({ where: { email } })
    const cres = await bcrypt.compare(password, user.password)
    if (cres) {
      return await this.authService.createSession(user)
    }
    return null
  }
}
