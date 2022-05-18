import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { UserCreateOrConnectWithoutSessionsInput } from './user-create-or-connect-without-sessions.input';
import { UserUpsertWithoutSessionsInput } from './user-upsert-without-sessions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSessionsInput } from './user-update-without-sessions.input';

@InputType()
export class UserUpdateOneRequiredWithoutSessionsInput {

    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    create?: UserCreateWithoutSessionsInput;

    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;

    @Field(() => UserUpsertWithoutSessionsInput, {nullable:true})
    upsert?: UserUpsertWithoutSessionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSessionsInput, {nullable:true})
    update?: UserUpdateWithoutSessionsInput;
}
