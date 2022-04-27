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
import { validate, Length } from 'class-validator'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { PrismaService } from 'src/prisma.service'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
import { Type } from '@nestjs/common'
import { CreateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/create-one-user.args'
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input'
import { plainToClass, plainToInstance } from 'class-transformer'

export function QueryInput<TWhere, TUnique>(
  whereRef: Type<TWhere>,
  whereUnique: Type<TUnique>
): any {
  @InputType(`${whereRef.name}Input`)
  abstract class Input {
    @Field(() => Int, { nullable: true })
    first?: number
    @Field(() => Int, { nullable: true })
    skip?: number
    @Field(() => whereUnique, { nullable: true })
    after?: TUnique
    @Field(() => whereRef, { nullable: true })
    where?: TWhere
  }
  return Input
}

@InputType()
class InputUser extends QueryInput(UserWhereInput, UserWhereUniqueInput) {}

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
    const v = await validate(d)
    if (v.length > 0) {
      throw v[0].children[0].constraints //todo error handling
    }
    const res = await this.prisma.user.create(data)
    return res
  }
}
