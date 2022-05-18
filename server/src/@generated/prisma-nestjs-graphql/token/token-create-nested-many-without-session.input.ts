import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutSessionInput } from './token-create-without-session.input';
import { TokenCreateOrConnectWithoutSessionInput } from './token-create-or-connect-without-session.input';
import { TokenCreateManySessionInputEnvelope } from './token-create-many-session-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@InputType()
export class TokenCreateNestedManyWithoutSessionInput {

    @Field(() => [TokenCreateWithoutSessionInput], {nullable:true})
    create?: Array<TokenCreateWithoutSessionInput>;

    @Field(() => [TokenCreateOrConnectWithoutSessionInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutSessionInput>;

    @Field(() => TokenCreateManySessionInputEnvelope, {nullable:true})
    createMany?: TokenCreateManySessionInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;
}
