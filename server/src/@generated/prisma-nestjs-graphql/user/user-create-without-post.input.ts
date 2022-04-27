import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GroupCreateNestedManyWithoutUsersInput } from '../group/group-create-nested-many-without-users.input'

@InputType()
export class UserCreateWithoutPostInput {
  @Field(() => GroupCreateNestedManyWithoutUsersInput, { nullable: true })
  groups?: GroupCreateNestedManyWithoutUsersInput

  @Field(() => String, { nullable: false })
  username!: string

  @Field(() => String, { nullable: true })
  password?: string

  @Field(() => Date, { nullable: true })
  lastLogin?: Date | string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  firstName!: string

  @Field(() => String, { nullable: false })
  lastName!: string

  @Field(() => String, { nullable: false })
  sirName!: string

  @Field(() => String, { nullable: false })
  avatar!: string

  @Field(() => Date, { nullable: false })
  birthday!: Date | string

  @Field(() => Date, { nullable: true })
  agreement?: Date | string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string
}
