import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutUsersInput } from './group-update-without-users.input';
import { GroupCreateWithoutUsersInput } from './group-create-without-users.input';

@InputType()
export class GroupUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutUsersInput, {nullable:false})
    update!: GroupUpdateWithoutUsersInput;

    @Field(() => GroupCreateWithoutUsersInput, {nullable:false})
    create!: GroupCreateWithoutUsersInput;
}
