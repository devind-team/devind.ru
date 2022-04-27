import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { GroupUncheckedCreateNestedManyWithoutUsersInput } from '../group/group-unchecked-create-nested-many-without-users.input'

@InputType()
export class UserUncheckedCreateWithoutPostInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => GroupUncheckedCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  groups?: GroupUncheckedCreateNestedManyWithoutUsersInput

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
