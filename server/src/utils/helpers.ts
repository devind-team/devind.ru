import { Type } from '@nestjs/common'
import { InputType, Field, Int } from '@nestjs/graphql'

export function removeProp(obj: any, propName: string): void {
  for (const prop in obj) {
    if (prop === propName) delete obj[prop]
    else if (typeof obj[prop] === 'object') removeProp(obj[prop], propName)
  }
}

export function QueryInput<TWhere, TUnique>(
  whereRef: Type<TWhere>,
  whereUnique: Type<TUnique>
): any {
  @InputType(`${whereRef.name}Input`)
  abstract class Input {
    @Field(() => Int, { nullable: true })
    first?: number
    @Field(() => Int, { nullable: true })
    skip?: number
    @Field(() => whereUnique, { nullable: true })
    after?: TUnique
    @Field(() => whereRef, { nullable: true })
    where?: TWhere
  }
  return Input
}
