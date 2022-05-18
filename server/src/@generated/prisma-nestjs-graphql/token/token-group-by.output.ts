import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TokenCountAggregate } from './token-count-aggregate.output';
import { TokenAvgAggregate } from './token-avg-aggregate.output';
import { TokenSumAggregate } from './token-sum-aggregate.output';
import { TokenMinAggregate } from './token-min-aggregate.output';
import { TokenMaxAggregate } from './token-max-aggregate.output';

@ObjectType()
export class TokenGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sessionId!: number;

    @Field(() => String, {nullable:false})
    jwt!: string;

    @Field(() => String, {nullable:false})
    refresh!: string;

    @Field(() => Boolean, {nullable:false})
    revoked!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TokenCountAggregate, {nullable:true})
    _count?: TokenCountAggregate;

    @Field(() => TokenAvgAggregate, {nullable:true})
    _avg?: TokenAvgAggregate;

    @Field(() => TokenSumAggregate, {nullable:true})
    _sum?: TokenSumAggregate;

    @Field(() => TokenMinAggregate, {nullable:true})
    _min?: TokenMinAggregate;

    @Field(() => TokenMaxAggregate, {nullable:true})
    _max?: TokenMaxAggregate;
}
