import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'

@InputType()
export class GroupScalarWhereWithAggregatesInput {
  @Field(() => [GroupScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<GroupScalarWhereWithAggregatesInput>

  @Field(() => [GroupScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<GroupScalarWhereWithAggregatesInput>

  @Field(() => [GroupScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<GroupScalarWhereWithAggregatesInput>

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter
}
