import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TokenCreateNestedManyWithoutSessionInput } from '../token/token-create-nested-many-without-session.input';

@InputType()
export class SessionCreateWithoutUserInput {

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => TokenCreateNestedManyWithoutSessionInput, {nullable:true})
    tokens?: TokenCreateNestedManyWithoutSessionInput;
}
