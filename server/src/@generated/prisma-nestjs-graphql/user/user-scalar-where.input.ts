import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { HideField } from '@nestjs/graphql'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>

  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>

  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  username?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @HideField()
  lastLogin?: DateTimeNullableFilter

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

  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthday?: DateTimeNullableFilter

  @HideField()
  agreement?: DateTimeNullableFilter

  @HideField()
  createdAt?: DateTimeFilter
}
