import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutTokensInput } from './session-create-without-tokens.input';
import { SessionCreateOrConnectWithoutTokensInput } from './session-create-or-connect-without-tokens.input';
import { SessionWhereUniqueInput } from './session-where-unique.input';

@InputType()
export class SessionCreateNestedOneWithoutTokensInput {

    @Field(() => SessionCreateWithoutTokensInput, {nullable:true})
    create?: SessionCreateWithoutTokensInput;

    @Field(() => SessionCreateOrConnectWithoutTokensInput, {nullable:true})
    connectOrCreate?: SessionCreateOrConnectWithoutTokensInput;

    @Field(() => SessionWhereUniqueInput, {nullable:true})
    connect?: SessionWhereUniqueInput;
}
