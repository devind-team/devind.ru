import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TokenMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    sessionId?: true;

    @Field(() => Boolean, {nullable:true})
    jwt?: true;

    @Field(() => Boolean, {nullable:true})
    refresh?: true;

    @Field(() => Boolean, {nullable:true})
    revoked?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
