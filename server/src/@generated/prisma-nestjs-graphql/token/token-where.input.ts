import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { SessionRelationFilter } from '../session/session-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenWhereInput {

    @Field(() => [TokenWhereInput], {nullable:true})
    AND?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    OR?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    NOT?: Array<TokenWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => SessionRelationFilter, {nullable:true})
    session?: SessionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    sessionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    jwt?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    refresh?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    revoked?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
