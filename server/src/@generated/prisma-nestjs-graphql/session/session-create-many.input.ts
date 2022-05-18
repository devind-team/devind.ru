import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class SessionCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    metadata!: any;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
