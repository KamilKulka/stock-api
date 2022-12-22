import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TickerSymbol {
  @Field()
  id: string;
  @Field()
  symbol: string;
  @Field()
  currency: string;
}
