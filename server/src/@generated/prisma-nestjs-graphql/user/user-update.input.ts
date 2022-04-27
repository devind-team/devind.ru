import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { HideField } from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input'
import { GroupUpdateManyWithoutUsersInput } from '../group/group-update-many-without-users.input'

@InputType()
export class UserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput

  @HideField()
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

  @HideField()
  agreement?: NullableDateTimeFieldUpdateOperationsInput

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => PostUpdateManyWithoutAuthorInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorInput

  @Field(() => GroupUpdateManyWithoutUsersInput, { nullable: true })
  groups?: GroupUpdateManyWithoutUsersInput
}
