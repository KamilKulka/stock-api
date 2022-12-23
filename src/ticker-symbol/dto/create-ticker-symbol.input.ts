import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTickerSymbolInput {
  @Field()
  symbol: string;
}
