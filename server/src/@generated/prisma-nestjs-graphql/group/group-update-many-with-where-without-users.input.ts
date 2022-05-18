import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupScalarWhereInput } from './group-scalar-where.input';
import { GroupUpdateManyMutationInput } from './group-update-many-mutation.input';

@InputType()
export class GroupUpdateManyWithWhereWithoutUsersInput {

    @Field(() => GroupScalarWhereInput, {nullable:false})
    where!: GroupScalarWhereInput;

    @Field(() => GroupUpdateManyMutationInput, {nullable:false})
    data!: GroupUpdateManyMutationInput;
}
