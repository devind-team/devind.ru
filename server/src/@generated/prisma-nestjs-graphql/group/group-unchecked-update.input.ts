import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { UserUncheckedUpdateManyWithoutGroupsInput } from '../user/user-unchecked-update-many-without-groups.input'

@InputType()
export class GroupUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => UserUncheckedUpdateManyWithoutGroupsInput, { nullable: true })
  users?: UserUncheckedUpdateManyWithoutGroupsInput
}
