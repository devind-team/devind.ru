import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';
import { SessionCreateOrConnectWithoutUserInput } from './session-create-or-connect-without-user.input';
import { SessionUpsertWithWhereUniqueWithoutUserInput } from './session-upsert-with-where-unique-without-user.input';
import { SessionCreateManyUserInputEnvelope } from './session-create-many-user-input-envelope.input';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithWhereUniqueWithoutUserInput } from './session-update-with-where-unique-without-user.input';
import { SessionUpdateManyWithWhereWithoutUserInput } from './session-update-many-with-where-without-user.input';
import { SessionScalarWhereInput } from './session-scalar-where.input';

@InputType()
export class SessionUpdateManyWithoutUserInput {

    @Field(() => [SessionCreateWithoutUserInput], {nullable:true})
    create?: Array<SessionCreateWithoutUserInput>;

    @Field(() => [SessionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;

    @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SessionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: SessionCreateManyUserInputEnvelope;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    set?: Array<SessionWhereUniqueInput>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    disconnect?: Array<SessionWhereUniqueInput>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    delete?: Array<SessionWhereUniqueInput>;

    @Field(() => [SessionWhereUniqueInput], {nullable:true})
    connect?: Array<SessionWhereUniqueInput>;

    @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    deleteMany?: Array<SessionScalarWhereInput>;
}
