import { Resolver, Query } from '@nestjs/graphql';
import { TickerSymbolService } from './ticker-symbol.service';
import { TickerSymbol } from './entities/ticker-symbol.entity';

@Resolver(() => TickerSymbol)
export class TickerSymbolResolver {
  constructor(private readonly tickerSymbolService: TickerSymbolService) {}

  @Query(() => [TickerSymbol])
  async getAllTickerSymbols(): Promise<TickerSymbol[]> {
    return this.tickerSymbolService.findAll();
  }
}
