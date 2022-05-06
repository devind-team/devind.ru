import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { User } from '../user/user.model'
import { GroupCount } from './group-count.output'

@ObjectType()
export class Group {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => [User], { nullable: true })
  users?: Array<User>

  @Field(() => GroupCount, { nullable: false })
  _count?: GroupCount
}
