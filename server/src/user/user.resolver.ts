import {
  Resolver,
  Query,
  Args,
  Mutation,
  Info,
  Int,
  InputType,
  Field
} from '@nestjs/graphql'
import { validate } from 'class-validator'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { PrismaService } from 'src/prisma.service'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
import { Type } from '@nestjs/common'
import { CreateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/create-one-user.args'
import { UpdateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/update-one-user.args'
import { plainToInstance } from 'class-transformer'
import { QueryInput } from 'src/utils/helpers'

@InputType()
class InputUser extends QueryInput(UserWhereInput, UserWhereUniqueInput) {}

//todo: Генерация резолвера?
@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

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

  @Mutation(() => User)
  async createUser(@Args() data: CreateOneUserArgs) {
    const d = plainToInstance(CreateOneUserArgs, data)
    const v = await validate(d, {
      skipMissingProperties: true
    })
    if (v.length > 0) {
      throw v
    }
    const res = await this.prisma.user.create(data)
    return res
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
