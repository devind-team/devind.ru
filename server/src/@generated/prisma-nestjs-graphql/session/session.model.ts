import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { Token } from '../token/token.model';
import { SessionCount } from './session-count.output';

@ObjectType()
export class Session {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => [Token], {nullable:true})
    tokens?: Array<Token>;

    @Field(() => SessionCount, {nullable:false})
    _count?: SessionCount;
}
