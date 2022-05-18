import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class SessionUpdateManyMutationInput {

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;
}
