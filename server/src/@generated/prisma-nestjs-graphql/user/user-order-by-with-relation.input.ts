import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { GroupOrderByRelationAggregateInput } from '../group/group-order-by-relation-aggregate.input';
import { SessionOrderByRelationAggregateInput } from '../session/session-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @HideField()
    lastLogin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sirName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @HideField()
    agreement?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => GroupOrderByRelationAggregateInput, {nullable:true})
    groups?: GroupOrderByRelationAggregateInput;

    @Field(() => SessionOrderByRelationAggregateInput, {nullable:true})
    sessions?: SessionOrderByRelationAggregateInput;
}
