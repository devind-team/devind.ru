import { registerEnumType } from '@nestjs/graphql';

export enum TokenScalarFieldEnum {
    id = "id",
    sessionId = "sessionId",
    jwt = "jwt",
    refresh = "refresh",
    revoked = "revoked",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TokenScalarFieldEnum, { name: 'TokenScalarFieldEnum', description: undefined })
