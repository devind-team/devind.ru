import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';
import { UserCreateOrConnectWithoutGroupsInput } from './user-create-or-connect-without-groups.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutGroupsInput {

    @Field(() => [UserCreateWithoutGroupsInput], {nullable:true})
    create?: Array<UserCreateWithoutGroupsInput>;

    @Field(() => [UserCreateOrConnectWithoutGroupsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutGroupsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
