import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutGroupsInput } from './user-create-without-groups.input';

@InputType()
export class UserCreateOrConnectWithoutGroupsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGroupsInput, {nullable:false})
    create!: UserCreateWithoutGroupsInput;
}
