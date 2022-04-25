import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { GroupListRelationFilter } from '../group/group-list-relation-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => GroupListRelationFilter, { nullable: true })
  groups?: GroupListRelationFilter

  @Field(() => StringFilter, { nullable: true })
  username?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  lastLogin?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  lastName?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  sirName?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  avatar?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  birthday?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  agreement?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter
}