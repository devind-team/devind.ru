import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ValidationError } from 'class-validator'
import { UserInputError } from 'apollo-server-express'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  )
  app.useGlobalPipes(
    //todo: Обработака ошибок призмы
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new UserInputError('VALIDATION_ERROR', {
          invalidArgs: errors
        })
      }
    })
  )
  await app.listen(3000)
}
bootstrap()
