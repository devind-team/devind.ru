import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GroupWhereUniqueInput } from './group-where-unique.input'
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input'

@InputType()
export class GroupCreateOrConnectWithoutUsersInput {
  @Field(() => GroupWhereUniqueInput, { nullable: false })
  where!: GroupWhereUniqueInput

  @Field(() => GroupCreateWithoutUsersInput, { nullable: false })
  create!: GroupCreateWithoutUsersInput
}
