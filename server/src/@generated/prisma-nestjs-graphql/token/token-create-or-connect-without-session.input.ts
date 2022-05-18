import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenCreateWithoutSessionInput } from './token-create-without-session.input';

@InputType()
export class TokenCreateOrConnectWithoutSessionInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenCreateWithoutSessionInput, {nullable:false})
    create!: TokenCreateWithoutSessionInput;
}
