import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSessionsInput } from './user-update-without-sessions.input';
import { UserCreateWithoutSessionsInput } from './user-create-without-sessions.input';

@InputType()
export class UserUpsertWithoutSessionsInput {

    @Field(() => UserUpdateWithoutSessionsInput, {nullable:false})
    update!: UserUpdateWithoutSessionsInput;

    @Field(() => UserCreateWithoutSessionsInput, {nullable:false})
    create!: UserCreateWithoutSessionsInput;
}
