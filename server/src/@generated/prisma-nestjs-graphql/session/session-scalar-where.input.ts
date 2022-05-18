import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class SessionScalarWhereInput {

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    AND?: Array<SessionScalarWhereInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    OR?: Array<SessionScalarWhereInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    NOT?: Array<SessionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    metadata?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
