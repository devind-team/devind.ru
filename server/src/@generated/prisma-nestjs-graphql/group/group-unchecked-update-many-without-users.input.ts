import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input'
import { GroupCreateOrConnectWithoutUsersInput } from './group-create-or-connect-without-users.input'
import { GroupUpsertWithWhereUniqueWithoutUsersInput } from './group-upsert-with-where-unique-without-users.input'
import { GroupWhereUniqueInput } from './group-where-unique.input'
import { GroupUpdateWithWhereUniqueWithoutUsersInput } from './group-update-with-where-unique-without-users.input'
import { GroupUpdateManyWithWhereWithoutUsersInput } from './group-update-many-with-where-without-users.input'
import { GroupScalarWhereInput } from './group-scalar-where.input'

@InputType()
export class GroupUncheckedUpdateManyWithoutUsersInput {
  @Field(() => [GroupCreateWithoutUsersInput], { nullable: true })
  create?: Array<GroupCreateWithoutUsersInput>

  @Field(() => [GroupCreateOrConnectWithoutUsersInput], { nullable: true })
  connectOrCreate?: Array<GroupCreateOrConnectWithoutUsersInput>

  @Field(() => [GroupUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: Array<GroupUpsertWithWhereUniqueWithoutUsersInput>

  @Field(() => [GroupWhereUniqueInput], { nullable: true })
  set?: Array<GroupWhereUniqueInput>

  @Field(() => [GroupWhereUniqueInput], { nullable: true })
  disconnect?: Array<GroupWhereUniqueInput>

  @Field(() => [GroupWhereUniqueInput], { nullable: true })
  delete?: Array<GroupWhereUniqueInput>

  @Field(() => [GroupWhereUniqueInput], { nullable: true })
  connect?: Array<GroupWhereUniqueInput>

  @Field(() => [GroupUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: Array<GroupUpdateWithWhereUniqueWithoutUsersInput>

  @Field(() => [GroupUpdateManyWithWhereWithoutUsersInput], { nullable: true })
  updateMany?: Array<GroupUpdateManyWithWhereWithoutUsersInput>

  @Field(() => [GroupScalarWhereInput], { nullable: true })
  deleteMany?: Array<GroupScalarWhereInput>
}
