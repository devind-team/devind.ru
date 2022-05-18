import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';
import { UserCreateOrConnectWithoutGroupsInput } from './user-create-or-connect-without-groups.input';
import { UserUpsertWithWhereUniqueWithoutGroupsInput } from './user-upsert-with-where-unique-without-groups.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutGroupsInput } from './user-update-with-where-unique-without-groups.input';
import { UserUpdateManyWithWhereWithoutGroupsInput } from './user-update-many-with-where-without-groups.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutGroupsInput {

    @Field(() => [UserCreateWithoutGroupsInput], {nullable:true})
    create?: Array<UserCreateWithoutGroupsInput>;

    @Field(() => [UserCreateOrConnectWithoutGroupsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutGroupsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutGroupsInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutGroupsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutGroupsInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutGroupsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutGroupsInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutGroupsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
