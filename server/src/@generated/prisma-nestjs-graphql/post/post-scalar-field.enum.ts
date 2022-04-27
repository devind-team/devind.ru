import { registerEnumType } from '@nestjs/graphql'

export enum PostScalarFieldEnum {
  id = 'id',
  name = 'name',
  userId = 'userId'
}

registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined
})
