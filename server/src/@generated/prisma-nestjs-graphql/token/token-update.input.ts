import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateOneRequiredWithoutTokensInput } from '../session/session-update-one-required-without-tokens.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TokenUpdateInput {

    @Field(() => SessionUpdateOneRequiredWithoutTokensInput, {nullable:true})
    session?: SessionUpdateOneRequiredWithoutTokensInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    jwt?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    refresh?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    revoked?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
