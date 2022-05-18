import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TokenUncheckedCreateNestedManyWithoutSessionInput } from '../token/token-unchecked-create-nested-many-without-session.input';

@InputType()
export class SessionUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => TokenUncheckedCreateNestedManyWithoutSessionInput, {nullable:true})
    tokens?: TokenUncheckedCreateNestedManyWithoutSessionInput;
}
