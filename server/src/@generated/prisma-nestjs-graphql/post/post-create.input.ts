import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutPostsInput;
}
