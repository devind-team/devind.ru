import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Group } from '../group/group.model';
import { Session } from '../session/session.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    /** User's name */
    @Field(() => String, {nullable:false,description:"User's name"})
    username!: string;

    @HideField()
    password!: string;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    sirName!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    avatar!: string;

    @Field(() => Date, {nullable:true})
    birthday!: Date | null;

    @Field(() => Date, {nullable:true})
    agreement!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Group], {nullable:true})
    groups?: Array<Group>;

    @Field(() => [Session], {nullable:true})
    sessions?: Array<Session>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
