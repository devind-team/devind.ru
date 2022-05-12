import { Module } from '@nestjs/common'
import { Request } from 'express'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
//import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { UserModule } from './user/user.module'
import { GraphQLError, GraphQLFormattedError } from 'graphql'
import { removeProp } from './utils/helpers'

export async function graphqlModuleFactory() {
  return {
    tracing: false,
    sortSchema: true,
    autoSchemaFile: '~schema.gql',
    installSubscriptionHandlers: true,
    subscriptions: {
      keepAlive: 5000
    },
    context: (data: any) => {
      return {
        token: undefined as string | undefined,
        req: data.req as Request
      }
    },
    formatError: (error: GraphQLError) => {
      if (error.message !== 'VALIDATION_ERROR') {
        return error
      }
      const errors = error.extensions.invalidArgs

      removeProp(errors, 'target') // todo: validate({ validationError: { target: false } }) не работает

      const extensions = {
        code: 'VALIDATION_ERROR',
        errors
      }

      const graphQLFormattedError: GraphQLFormattedError = {
        message: 'VALIDATION_ERROR',
        extensions: extensions
      }
      return graphQLFormattedError
    }
  }
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    ConfigModule.forRoot(),
    //AuthModule,
    GraphQLModule.forRootAsync({
      useFactory: graphqlModuleFactory,
      driver: ApolloDriver
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
