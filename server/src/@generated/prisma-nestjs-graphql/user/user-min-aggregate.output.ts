import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    password?: string;

    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    sirName?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Date, {nullable:true})
    agreement?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
