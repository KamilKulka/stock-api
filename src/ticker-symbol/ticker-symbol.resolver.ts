import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TickerSymbolService } from './ticker-symbol.service';
import { TickerSymbol } from './entities/ticker-symbol.entity';
import { CreateTickerSymbolInput } from './dto/create-ticker-symbol.input';

@Resolver(() => TickerSymbol)
export class TickerSymbolResolver {
  constructor(private readonly tickerSymbolService: TickerSymbolService) {}

  @Mutation(() => TickerSymbol)
  createTickerSymbol(
    @Args('createTickerSymbolInput')
    createTickerSymbolInput: CreateTickerSymbolInput,
  ) {
    return this.tickerSymbolService.create(createTickerSymbolInput);
  }
  @Mutation(() => TickerSymbol)
  createTickerSymbolWithSymbol(symbol: string) {
    return this.tickerSymbolService.createWithSymbol(symbol);
  }
  @Query(() => [TickerSymbol])
  async getAllTickerSymbols(): Promise<TickerSymbol[]> {
    return this.tickerSymbolService.findAll();
  }

  @Query(() => TickerSymbol)
  async getTickerSymbolBySymbol(
    @Args('symbol') symbol: string,
  ): Promise<TickerSymbol> {
    return this.tickerSymbolService.findOneBySymbol(symbol);
  }

  @Mutation(() => TickerSymbol)
  async removeTickerSymbol(
    @Args('symbol')
    symbol: string,
  ) {
    return this.tickerSymbolService.remove(symbol);
  }
}
