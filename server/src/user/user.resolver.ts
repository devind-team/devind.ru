import { Resolver, Query, Args, Mutation, Info } from '@nestjs/graphql'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { PrismaService } from 'src/prisma.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users(
    @Info() info: GraphQLResolveInfo,
    @Args('where', { nullable: true }) where?: UserWhereInput
  ) {
    const select = new PrismaSelect(info).value
    return await this.prisma.user.findMany({ where, ...select })
  }
}
