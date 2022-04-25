import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateWithoutGroupsInput {
  @Field(() => String, { nullable: false })
  username!: string

  @Field(() => String, { nullable: true })
  password?: string

  @Field(() => Date, { nullable: false })
  lastLogin!: Date | string

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

  @Field(() => Date, { nullable: false })
  agreement!: Date | string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string
}
