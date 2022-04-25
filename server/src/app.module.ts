import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
//import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    //AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: '~schema.gql'
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
