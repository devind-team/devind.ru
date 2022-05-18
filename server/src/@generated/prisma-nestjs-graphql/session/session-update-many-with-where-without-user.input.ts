import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionScalarWhereInput } from './session-scalar-where.input';
import { SessionUpdateManyMutationInput } from './session-update-many-mutation.input';

@InputType()
export class SessionUpdateManyWithWhereWithoutUserInput {

    @Field(() => SessionScalarWhereInput, {nullable:false})
    where!: SessionScalarWhereInput;

    @Field(() => SessionUpdateManyMutationInput, {nullable:false})
    data!: SessionUpdateManyMutationInput;
}
