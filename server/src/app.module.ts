import { Module } from '@nestjs/common'
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

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    //AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: '~schema.gql',
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
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
