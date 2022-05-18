import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';

@InputType()
export class SessionCreateOrConnectWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;

    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    create!: SessionCreateWithoutUserInput;
}
