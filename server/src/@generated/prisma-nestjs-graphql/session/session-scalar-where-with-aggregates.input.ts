import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class SessionScalarWhereWithAggregatesInput {

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => [SessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    metadata?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
