import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Session } from '../session/session.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Token {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Session, {nullable:false})
    session?: Session;

    @Field(() => Int, {nullable:false})
    sessionId!: number;

    @Field(() => String, {nullable:false})
    jwt!: string;

    @Field(() => String, {nullable:false})
    refresh!: string;

    @Field(() => Boolean, {nullable:false})
    revoked!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
