import { Field, Float, InputType } from '@nestjs/graphql';
import { TickerSymbol } from '../../ticker-symbol/entities/ticker-symbol.entity';

@InputType()
export class CreateRecordInput {
  @Field()
  timestamp: Date;

  @Field(() => Float)
  price: number;

  @Field()
  tickerId: string;

  @Field()
  ticker: TickerSymbol;
}
