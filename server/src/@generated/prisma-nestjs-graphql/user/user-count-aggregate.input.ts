import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  username?: true

  @Field(() => Boolean, { nullable: true })
  password?: true

  @Field(() => Boolean, { nullable: true })
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

  @Field(() => Boolean, { nullable: true })
  agreement?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}
