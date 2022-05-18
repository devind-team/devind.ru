import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { GroupListRelationFilter } from '../group/group-list-relation-filter.input';
import { SessionListRelationFilter } from '../session/session-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @HideField()
    lastLogin?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sirName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatar?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthday?: DateTimeNullableFilter;

    @HideField()
    agreement?: DateTimeNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => GroupListRelationFilter, {nullable:true})
    groups?: GroupListRelationFilter;

    @Field(() => SessionListRelationFilter, {nullable:true})
    sessions?: SessionListRelationFilter;
}
