import {
  Resolver,
  Query,
  Args,
  Mutation,
  Info,
  InputType
} from '@nestjs/graphql'
import { validate } from 'class-validator'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { PrismaService } from 'src/prisma.service'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
import { UseGuards } from '@nestjs/common'
import { CreateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/create-one-user.args'
import { UpdateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/update-one-user.args'
import { plainToInstance } from 'class-transformer'
import { QueryInput } from 'src/utils/helpers'
import { UserService } from './user.service'
import { AuthService } from 'src/auth/auth.service'
import { SessionService } from 'src/auth/session.service'
import { UserRepository } from './user.repository'
import { SingInArgs, TokenType } from 'src/auth/types'
import { GraphqlAuthGuard } from 'src/auth/guards'

@InputType()
class InputUser extends QueryInput(UserWhereInput, UserWhereUniqueInput) {}

//todo: Генерация резолвера?
@Resolver(() => User)
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private authService: AuthService,
    private sessionService: SessionService,
    private userRepo: UserRepository
  ) {}

  @Query(() => User)
  @UseGuards(GraphqlAuthGuard)
  async me() {
    const id = this.sessionService.currentUserId()
    const user = await this.userRepo.findUnique({ where: { id } })
    return user
  }

  @Query(() => [User])
  async users(
    @Info() info: GraphQLResolveInfo,
    @Args('input', {
      nullable: true
    })
    input?: InputUser
  ) {
    const select = new PrismaSelect(info).value
    return await this.prisma.user.findMany({
      take: input?.first,
      skip: input?.skip,
      cursor: input?.after,
      where: input?.where,
      ...select
    })
  }

  @Mutation(() => TokenType)
  async signIn(@Args() data: SingInArgs) {
    const credentials = data.data
    return await this.userService.signIn(
      credentials.email,
      credentials.password
    )
  }

  @Mutation(() => User)
  async createUser(@Args() data: CreateOneUserArgs) {
    const d = plainToInstance(CreateOneUserArgs, data)
    const v = await validate(d, {
      skipMissingProperties: true
    })
    if (v.length > 0) {
      throw v
    }
    const user = await this.userService.create(data.data)
    return user
  }

  @Mutation(() => User)
  async changeUser(@Args() data: UpdateOneUserArgs) {
    const d = plainToInstance(UpdateOneUserArgs, data)
    const v = await validate(d, {
      skipMissingProperties: true
    })
    if (v.length > 0) {
      throw v
    }
    return await this.prisma.user.update(data)
  }
}
