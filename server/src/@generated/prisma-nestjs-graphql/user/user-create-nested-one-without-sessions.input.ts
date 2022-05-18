import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';
import { UserCreateOrConnectWithoutSessionsInput } from './user-create-or-connect-without-sessions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSessionsInput {

    @Field(() => UserCreateWithoutSessionsInput, {nullable:true})
    create?: UserCreateWithoutSessionsInput;

    @Field(() => UserCreateOrConnectWithoutSessionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
