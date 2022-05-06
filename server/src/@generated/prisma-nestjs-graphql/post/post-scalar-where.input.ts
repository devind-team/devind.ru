import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFilter } from '../prisma/int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'

@InputType()
export class PostScalarWhereInput {
  @Field(() => [PostScalarWhereInput], { nullable: true })
  AND?: Array<PostScalarWhereInput>

  @Field(() => [PostScalarWhereInput], { nullable: true })
  OR?: Array<PostScalarWhereInput>

  @Field(() => [PostScalarWhereInput], { nullable: true })
  NOT?: Array<PostScalarWhereInput>

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  userId?: IntFilter
}
