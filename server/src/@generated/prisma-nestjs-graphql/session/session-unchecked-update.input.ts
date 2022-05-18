import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TokenUncheckedUpdateManyWithoutSessionInput } from '../token/token-unchecked-update-many-without-session.input';

@InputType()
export class SessionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => TokenUncheckedUpdateManyWithoutSessionInput, {nullable:true})
    tokens?: TokenUncheckedUpdateManyWithoutSessionInput;
}
