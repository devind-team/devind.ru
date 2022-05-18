import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateManySessionInput } from './token-create-many-session.input';

@InputType()
export class TokenCreateManySessionInputEnvelope {

    @Field(() => [TokenCreateManySessionInput], {nullable:false})
    data!: Array<TokenCreateManySessionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
