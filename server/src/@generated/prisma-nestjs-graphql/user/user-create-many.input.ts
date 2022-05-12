import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { HideField } from '@nestjs/graphql'

@InputType()
export class UserCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: false })
  @Validator.MinLength(3)
  @Validator.MaxLength(50)
  username!: string

  @Field(() => String, { nullable: false })
  password!: string

  @HideField()
  lastLogin?: Date | string

  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string

  @Field(() => String, { nullable: false })
  firstName!: string

  @Field(() => String, { nullable: false })
  lastName!: string

  @Field(() => String, { nullable: true })
  sirName?: string

  @Field(() => String, { nullable: true })
  avatar?: string

  @Field(() => Date, { nullable: true })
  birthday?: Date | string

  @HideField()
  agreement?: Date | string

  @HideField()
  createdAt?: Date | string
}
