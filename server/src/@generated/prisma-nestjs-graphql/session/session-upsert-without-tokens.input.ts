import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateWithoutTokensInput } from './session-update-without-tokens.input';
import { SessionCreateWithoutTokensInput } from './session-create-without-tokens.input';

@InputType()
export class SessionUpsertWithoutTokensInput {

    @Field(() => SessionUpdateWithoutTokensInput, {nullable:false})
    update!: SessionUpdateWithoutTokensInput;

    @Field(() => SessionCreateWithoutTokensInput, {nullable:false})
    create!: SessionCreateWithoutTokensInput;
}
