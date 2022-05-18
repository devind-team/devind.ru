import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TokenMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sessionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jwt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refresh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    revoked?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
