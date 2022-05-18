import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateNestedOneWithoutTokensInput } from '../session/session-create-nested-one-without-tokens.input';

@InputType()
export class TokenCreateInput {

    @Field(() => SessionCreateNestedOneWithoutTokensInput, {nullable:false})
    session!: SessionCreateNestedOneWithoutTokensInput;

    @Field(() => String, {nullable:false})
    jwt!: string;

    @Field(() => String, {nullable:false})
    refresh!: string;

    @Field(() => Boolean, {nullable:false})
    revoked!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
