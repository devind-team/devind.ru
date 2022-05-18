import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithoutUserInput } from './session-update-without-user.input';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;

    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    update!: SessionUpdateWithoutUserInput;

    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    create!: SessionCreateWithoutUserInput;
}
