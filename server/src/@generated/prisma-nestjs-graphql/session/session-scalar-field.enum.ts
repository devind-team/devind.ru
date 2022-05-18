import { registerEnumType } from '@nestjs/graphql';

export enum SessionScalarFieldEnum {
    id = "id",
    metadata = "metadata",
    userId = "userId"
}


registerEnumType(SessionScalarFieldEnum, { name: 'SessionScalarFieldEnum', description: undefined })
