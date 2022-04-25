import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  username!: number

  @HideField()
  password!: number

  @Field(() => Int, { nullable: false })
  lastLogin!: number

  @Field(() => Int, { nullable: false })
  email!: number

  @Field(() => Int, { nullable: false })
  firstName!: number

  @Field(() => Int, { nullable: false })
  lastName!: number

  @Field(() => Int, { nullable: false })
  sirName!: number

  @Field(() => Int, { nullable: false })
  avatar!: number

  @Field(() => Int, { nullable: false })
  birthday!: number

  @Field(() => Int, { nullable: false })
  agreement!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
