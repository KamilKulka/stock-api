import { Module } from '@nestjs/common';
import { TickerSymbolService } from './ticker-symbol.service';
import { TickerSymbolResolver } from './ticker-symbol.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TickerSymbol } from './entities/ticker-symbol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TickerSymbol])],
  providers: [TickerSymbolResolver, TickerSymbolService],
  exports: [TickerSymbolService],
})
export class TickerSymbolModule {}
