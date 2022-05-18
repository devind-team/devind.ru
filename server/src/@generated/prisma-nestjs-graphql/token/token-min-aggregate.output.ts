import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TokenMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    sessionId?: number;

    @Field(() => String, {nullable:true})
    jwt?: string;

    @Field(() => String, {nullable:true})
    refresh?: string;

    @Field(() => Boolean, {nullable:true})
    revoked?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
