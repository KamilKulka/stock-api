import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateInstrumentTicker {
  @IsNotEmpty()
  @Field()
  timestamp: Date;
  @IsNotEmpty()
  @Field(() => Float)
  price: number;
  @IsNotEmpty()
  @Field()
  tickerSymbol: string;
}
