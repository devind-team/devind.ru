import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TokenListRelationFilter } from '../token/token-list-relation-filter.input';

@InputType()
export class SessionWhereInput {

    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    metadata?: JsonFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => TokenListRelationFilter, {nullable:true})
    tokens?: TokenListRelationFilter;
}
