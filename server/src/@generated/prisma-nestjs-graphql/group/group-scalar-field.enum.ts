import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
