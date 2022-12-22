import { Module } from '@nestjs/common';
import { TickerSymbolService } from './ticker-symbol.service';
import { TickerSymbolResolver } from './ticker-symbol.resolver';

@Module({
  providers: [TickerSymbolResolver, TickerSymbolService]
})
export class TickerSymbolModule {}
