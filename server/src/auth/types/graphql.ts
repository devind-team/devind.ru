import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { ValidateNested, IsEmail } from 'class-validator'
import { Type } from 'class-transformer'

@ObjectType()
export class TokenType {
  @Field(() => String, { nullable: false })
  accessToken!: string
  @Field(() => String, { nullable: false })
  refreshToken!: string
  @Field(() => Int, { nullable: false })
  accessTokenExpiresAt!: number
  @Field(() => Int, { nullable: false })
  refreshTokenExpiresAt!: number
}

@InputType()
export class SignInInput {
  @Field(() => String, { nullable: false })
  @IsEmail()
  email!: string
  @Field(() => String, { nullable: false })
  password!: string
}

@ArgsType()
export class SingInArgs {
  @Field(() => SignInInput, { nullable: false })
  @ValidateNested()
  @Type(() => SignInInput)
  data!: SignInInput
}

@InputType()
export class RefreshSessionInput {
  @Field(() => String, { nullable: false })
  refreshToken!: string
}
@ArgsType()
export class RefreshSessionArgs {
  @Field(() => RefreshSessionInput, { nullable: false })
  @Type(() => RefreshSessionInput)
  data!: RefreshSessionInput
}
