import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TokenUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    sessionId!: number;

    @Field(() => String, {nullable:false})
    jwt!: string;

    @Field(() => String, {nullable:false})
    refresh!: string;

    @Field(() => Boolean, {nullable:false})
    revoked!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
