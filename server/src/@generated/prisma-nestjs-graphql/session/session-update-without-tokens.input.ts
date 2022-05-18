import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserUpdateOneRequiredWithoutSessionsInput } from '../user/user-update-one-required-without-sessions.input';

@InputType()
export class SessionUpdateWithoutTokensInput {

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => UserUpdateOneRequiredWithoutSessionsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSessionsInput;
}
