import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionCreateWithoutTokensInput } from './session-create-without-tokens.input';

@InputType()
export class SessionCreateOrConnectWithoutTokensInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;

    @Field(() => SessionCreateWithoutTokensInput, {nullable:false})
    create!: SessionCreateWithoutTokensInput;
}
