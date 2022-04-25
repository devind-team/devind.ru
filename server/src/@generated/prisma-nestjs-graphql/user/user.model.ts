import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Group } from '../group/group.model'
import { HideField } from '@nestjs/graphql'
import { UserCount } from './user-count.output'

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => [Group], { nullable: true })
  groups?: Array<Group>

  @Field(() => String, { nullable: false })
  username!: string

  @HideField()
  password!: string

  @Field(() => Date, { nullable: false })
  lastLogin!: Date

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
  birthday!: Date

  @Field(() => Date, { nullable: false })
  agreement!: Date

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount
}
