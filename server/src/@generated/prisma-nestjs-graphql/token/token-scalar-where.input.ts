import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenScalarWhereInput {

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    AND?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    OR?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    NOT?: Array<TokenScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
