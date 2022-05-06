import { registerEnumType } from '@nestjs/graphql'

export enum UserScalarFieldEnum {
  id = 'id',
  username = 'username',
  password = 'password',
  lastLogin = 'lastLogin',
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  sirName = 'sirName',
  avatar = 'avatar',
  birthday = 'birthday',
  agreement = 'agreement',
  createdAt = 'createdAt'
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined
})
