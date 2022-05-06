import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { UserListRelationFilter } from '../user/user-list-relation-filter.input'

@InputType()
export class GroupWhereInput {
  @Field(() => [GroupWhereInput], { nullable: true })
  AND?: Array<GroupWhereInput>

  @Field(() => [GroupWhereInput], { nullable: true })
  OR?: Array<GroupWhereInput>

  @Field(() => [GroupWhereInput], { nullable: true })
  NOT?: Array<GroupWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => UserListRelationFilter, { nullable: true })
  users?: UserListRelationFilter
}
