import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutGroupsInput } from './user-update-without-groups.input';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutGroupsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupsInput, {nullable:false})
    update!: UserUpdateWithoutGroupsInput;

    @Field(() => UserCreateWithoutGroupsInput, {nullable:false})
    create!: UserCreateWithoutGroupsInput;
}
