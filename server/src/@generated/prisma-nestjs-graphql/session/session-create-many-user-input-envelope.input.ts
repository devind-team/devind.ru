import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateManyUserInput } from './session-create-many-user.input';

@InputType()
export class SessionCreateManyUserInputEnvelope {

    @Field(() => [SessionCreateManyUserInput], {nullable:false})
    data!: Array<SessionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
