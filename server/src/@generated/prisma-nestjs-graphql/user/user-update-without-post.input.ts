import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { GroupUpdateManyWithoutUsersInput } from '../group/group-update-many-without-users.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class UserUpdateWithoutPostInput {
  @Field(() => GroupUpdateManyWithoutUsersInput, { nullable: true })
  groups?: GroupUpdateManyWithoutUsersInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  lastLogin?: NullableDateTimeFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  firstName?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  lastName?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sirName?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  avatar?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  birthday?: DateTimeFieldUpdateOperationsInput

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  agreement?: NullableDateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput
}
