import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutSessionsInput } from '../user/user-create-nested-one-without-sessions.input';

@InputType()
export class SessionCreateWithoutTokensInput {

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSessionsInput;
}
