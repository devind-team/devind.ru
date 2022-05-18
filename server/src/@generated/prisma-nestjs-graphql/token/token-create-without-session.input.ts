import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TokenCreateWithoutSessionInput {

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
