import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';

@InputType()
export class GroupUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    data!: GroupUpdateWithoutUsersInput;
}
