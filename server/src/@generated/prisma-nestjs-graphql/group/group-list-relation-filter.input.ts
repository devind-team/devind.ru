import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';

@InputType()
export class GroupListRelationFilter {

    @Field(() => GroupWhereInput, {nullable:true})
    every?: GroupWhereInput;

    @Field(() => GroupWhereInput, {nullable:true})
    some?: GroupWhereInput;

    @Field(() => GroupWhereInput, {nullable:true})
    none?: GroupWhereInput;
}
