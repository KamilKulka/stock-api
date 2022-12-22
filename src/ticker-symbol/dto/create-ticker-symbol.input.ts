import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTickerSymbolInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
