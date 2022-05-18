import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutSessionInput } from './token-update-without-session.input';

@InputType()
export class TokenUpdateWithWhereUniqueWithoutSessionInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutSessionInput, {nullable:false})
    data!: TokenUpdateWithoutSessionInput;
}
