import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class GroupCreateWithoutUsersInput {
  @Field(() => String, { nullable: false })
  name!: string
}
