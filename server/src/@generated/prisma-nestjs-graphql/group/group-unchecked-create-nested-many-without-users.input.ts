import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input'
import { GroupCreateOrConnectWithoutUsersInput } from './group-create-or-connect-without-users.input'
import { GroupWhereUniqueInput } from './group-where-unique.input'

@InputType()
export class GroupUncheckedCreateNestedManyWithoutUsersInput {
  @Field(() => [GroupCreateWithoutUsersInput], { nullable: true })
  create?: Array<GroupCreateWithoutUsersInput>

  @Field(() => [GroupCreateOrConnectWithoutUsersInput], { nullable: true })
  connectOrCreate?: Array<GroupCreateOrConnectWithoutUsersInput>

  @Field(() => [GroupWhereUniqueInput], { nullable: true })
  connect?: Array<GroupWhereUniqueInput>
}
