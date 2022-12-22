import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TickerSymbolService } from './ticker-symbol.service';
import { TickerSymbol } from './entities/ticker-symbol.entity';
import { CreateTickerSymbolInput } from './dto/create-ticker-symbol.input';
import { UpdateTickerSymbolInput } from './dto/update-ticker-symbol.input';

@Resolver(() => TickerSymbol)
export class TickerSymbolResolver {
  constructor(private readonly tickerSymbolService: TickerSymbolService) {}

  @Mutation(() => TickerSymbol)
  createTickerSymbol(@Args('createTickerSymbolInput') createTickerSymbolInput: CreateTickerSymbolInput) {
    return this.tickerSymbolService.create(createTickerSymbolInput);
  }

  @Query(() => [TickerSymbol], { name: 'tickerSymbol' })
  findAll() {
    return this.tickerSymbolService.findAll();
  }

  @Query(() => TickerSymbol, { name: 'tickerSymbol' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tickerSymbolService.findOne(id);
  }

  @Mutation(() => TickerSymbol)
  updateTickerSymbol(@Args('updateTickerSymbolInput') updateTickerSymbolInput: UpdateTickerSymbolInput) {
    return this.tickerSymbolService.update(updateTickerSymbolInput.id, updateTickerSymbolInput);
  }

  @Mutation(() => TickerSymbol)
  removeTickerSymbol(@Args('id', { type: () => Int }) id: number) {
    return this.tickerSymbolService.remove(id);
  }
}
