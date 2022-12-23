import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInstrumentTicker {
  @Field()
  timestamp: Date;

  @Field(() => Float)
  price: number;

  @Field()
  tickerSymbol: string;
}
