import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutGroupsInput } from '../user/user-create-nested-many-without-groups.input';

@InputType()
export class GroupCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedManyWithoutGroupsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutGroupsInput;
}
