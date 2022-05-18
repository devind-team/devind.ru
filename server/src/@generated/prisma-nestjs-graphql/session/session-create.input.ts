import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutSessionsInput } from '../user/user-create-nested-one-without-sessions.input';
import { TokenCreateNestedManyWithoutSessionInput } from '../token/token-create-nested-many-without-session.input';

@InputType()
export class SessionCreateInput {

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSessionsInput;

    @Field(() => TokenCreateNestedManyWithoutSessionInput, {nullable:true})
    tokens?: TokenCreateNestedManyWithoutSessionInput;
}
