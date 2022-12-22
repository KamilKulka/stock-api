import { CreateTickerSymbolInput } from './create-ticker-symbol.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTickerSymbolInput extends PartialType(CreateTickerSymbolInput) {
  @Field(() => Int)
  id: number;
}
