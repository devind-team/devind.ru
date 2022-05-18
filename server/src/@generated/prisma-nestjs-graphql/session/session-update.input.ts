import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserUpdateOneRequiredWithoutSessionsInput } from '../user/user-update-one-required-without-sessions.input';
import { TokenUpdateManyWithoutSessionInput } from '../token/token-update-many-without-session.input';

@InputType()
export class SessionUpdateInput {

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => UserUpdateOneRequiredWithoutSessionsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSessionsInput;

    @Field(() => TokenUpdateManyWithoutSessionInput, {nullable:true})
    tokens?: TokenUpdateManyWithoutSessionInput;
}
