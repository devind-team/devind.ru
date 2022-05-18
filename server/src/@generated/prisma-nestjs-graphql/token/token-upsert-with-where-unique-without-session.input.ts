import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutSessionInput } from './token-update-without-session.input';
import { TokenCreateWithoutSessionInput } from './token-create-without-session.input';

@InputType()
export class TokenUpsertWithWhereUniqueWithoutSessionInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutSessionInput, {nullable:false})
    update!: TokenUpdateWithoutSessionInput;

    @Field(() => TokenCreateWithoutSessionInput, {nullable:false})
    create!: TokenCreateWithoutSessionInput;
}
