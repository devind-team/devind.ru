import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsInput } from '../user/user-update-one-required-without-posts.input';

@InputType()
export class PostUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutPostsInput;
}
