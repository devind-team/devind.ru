import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutSessionInput } from './token-create-without-session.input';
import { TokenCreateOrConnectWithoutSessionInput } from './token-create-or-connect-without-session.input';
import { TokenUpsertWithWhereUniqueWithoutSessionInput } from './token-upsert-with-where-unique-without-session.input';
import { TokenCreateManySessionInputEnvelope } from './token-create-many-session-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithWhereUniqueWithoutSessionInput } from './token-update-with-where-unique-without-session.input';
import { TokenUpdateManyWithWhereWithoutSessionInput } from './token-update-many-with-where-without-session.input';
import { TokenScalarWhereInput } from './token-scalar-where.input';

@InputType()
export class TokenUncheckedUpdateManyWithoutSessionInput {

    @Field(() => [TokenCreateWithoutSessionInput], {nullable:true})
    create?: Array<TokenCreateWithoutSessionInput>;

    @Field(() => [TokenCreateOrConnectWithoutSessionInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutSessionInput>;

    @Field(() => [TokenUpsertWithWhereUniqueWithoutSessionInput], {nullable:true})
    upsert?: Array<TokenUpsertWithWhereUniqueWithoutSessionInput>;

    @Field(() => TokenCreateManySessionInputEnvelope, {nullable:true})
    createMany?: TokenCreateManySessionInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    set?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    disconnect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    delete?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenUpdateWithWhereUniqueWithoutSessionInput], {nullable:true})
    update?: Array<TokenUpdateWithWhereUniqueWithoutSessionInput>;

    @Field(() => [TokenUpdateManyWithWhereWithoutSessionInput], {nullable:true})
    updateMany?: Array<TokenUpdateManyWithWhereWithoutSessionInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    deleteMany?: Array<TokenScalarWhereInput>;
}
