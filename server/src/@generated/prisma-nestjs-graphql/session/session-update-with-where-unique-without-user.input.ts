import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { SessionUpdateWithoutUserInput } from './session-update-without-user.input';

@InputType()
export class SessionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    where!: SessionWhereUniqueInput;

    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    data!: SessionUpdateWithoutUserInput;
}
