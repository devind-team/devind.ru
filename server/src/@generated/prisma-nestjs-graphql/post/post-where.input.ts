import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { UserRelationFilter } from '../user/user-relation-filter.input'

@InputType()
export class PostWhereInput {
  @Field(() => [PostWhereInput], { nullable: true })
  AND?: Array<PostWhereInput>

  @Field(() => [PostWhereInput], { nullable: true })
  OR?: Array<PostWhereInput>

  @Field(() => [PostWhereInput], { nullable: true })
  NOT?: Array<PostWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => UserRelationFilter, { nullable: true })
  author?: UserRelationFilter

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter
}
