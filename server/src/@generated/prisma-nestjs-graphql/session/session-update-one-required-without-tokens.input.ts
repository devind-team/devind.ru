import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutTokensInput } from './session-create-without-tokens.input';
import { SessionCreateOrConnectWithoutTokensInput } from './session-create-or-connect-without-tokens.input';
import { SessionUpsertWithoutTokensInput } from './session-upsert-without-tokens.input';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithoutTokensInput } from './session-update-without-tokens.input';

@InputType()
export class SessionUpdateOneRequiredWithoutTokensInput {

    @Field(() => SessionCreateWithoutTokensInput, {nullable:true})
    create?: SessionCreateWithoutTokensInput;

    @Field(() => SessionCreateOrConnectWithoutTokensInput, {nullable:true})
    connectOrCreate?: SessionCreateOrConnectWithoutTokensInput;

    @Field(() => SessionUpsertWithoutTokensInput, {nullable:true})
    upsert?: SessionUpsertWithoutTokensInput;

    @Field(() => SessionWhereUniqueInput, {nullable:true})
    connect?: SessionWhereUniqueInput;

    @Field(() => SessionUpdateWithoutTokensInput, {nullable:true})
    update?: SessionUpdateWithoutTokensInput;
}
