import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereInput } from '../session/session-where.input';
import { SessionOrderByWithAggregationInput } from '../session/session-order-by-with-aggregation.input';
import { SessionScalarFieldEnum } from '../session/session-scalar-field.enum';
import { SessionScalarWhereWithAggregatesInput } from '../session/session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBySessionArgs {

    @Field(() => SessionWhereInput, {nullable:true})
    where?: SessionWhereInput;

    @Field(() => [SessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionOrderByWithAggregationInput>;

    @Field(() => [SessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionScalarFieldEnum>;

    @Field(() => SessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: SessionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
