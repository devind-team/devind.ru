import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { UserUncheckedCreateNestedManyWithoutGroupsInput } from '../user/user-unchecked-create-nested-many-without-groups.input'

@InputType()
export class GroupUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => UserUncheckedCreateNestedManyWithoutGroupsInput, {
    nullable: true
  })
  users?: UserUncheckedCreateNestedManyWithoutGroupsInput
}
