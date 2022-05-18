import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TokenUpdateManyWithoutSessionInput } from '../token/token-update-many-without-session.input';

@InputType()
export class SessionUpdateWithoutUserInput {

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => TokenUpdateManyWithoutSessionInput, {nullable:true})
    tokens?: TokenUpdateManyWithoutSessionInput;
}
