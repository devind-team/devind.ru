import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutGroupsInput } from './user-update-without-groups.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutGroupsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGroupsInput, {nullable:false})
    data!: UserUpdateWithoutGroupsInput;
}
