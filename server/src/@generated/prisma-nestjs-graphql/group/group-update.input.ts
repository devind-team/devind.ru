import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateManyWithoutGroupsInput } from '../user/user-update-many-without-groups.input';

@InputType()
export class GroupUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutGroupsInput, {nullable:true})
    users?: UserUpdateManyWithoutGroupsInput;
}
