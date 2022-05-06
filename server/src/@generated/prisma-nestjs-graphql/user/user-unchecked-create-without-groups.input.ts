import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { HideField } from '@nestjs/graphql'
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input'

@InputType()
export class UserUncheckedCreateWithoutGroupsInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  @Validator.MaxLength(50)
  username!: string

  @Field(() => String, { nullable: true })
  password?: string

  @HideField()
  lastLogin?: Date | string

  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
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

  @HideField()
  agreement?: Date | string

  @HideField()
  createdAt?: Date | string

  @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
}
