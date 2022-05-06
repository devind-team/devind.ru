import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  username?: true

  @Field(() => Boolean, { nullable: true })
  password?: true

  @HideField()
  lastLogin?: true

  @Field(() => Boolean, { nullable: true })
  email?: true

  @Field(() => Boolean, { nullable: true })
  firstName?: true

  @Field(() => Boolean, { nullable: true })
  lastName?: true

  @Field(() => Boolean, { nullable: true })
  sirName?: true

  @Field(() => Boolean, { nullable: true })
  avatar?: true

  @Field(() => Boolean, { nullable: true })
  birthday?: true

  @HideField()
  agreement?: true

  @HideField()
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}
