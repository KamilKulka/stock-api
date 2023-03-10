import { Injectable } from '@nestjs/common';
import { CreateTickerSymbolInput } from './dto/create-ticker-symbol.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TickerSymbol } from './entities/ticker-symbol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TickerSymbolService {
  constructor(
    @InjectRepository(TickerSymbol)
    private tickerSymbolRepository: Repository<TickerSymbol>,
  ) {}

  async createWithSymbol(symbol: string) {
    const createTickerSymbolInput = new CreateTickerSymbolInput();
    createTickerSymbolInput.symbol = symbol;
    const newTicker = await this.tickerSymbolRepository.create(
      createTickerSymbolInput,
    );
    return this.tickerSymbolRepository.save(newTicker);
  }

  async findAll(): Promise<TickerSymbol[]> {
    return this.tickerSymbolRepository.find();
  }

  async findOneBySymbol(symbol: string): Promise<TickerSymbol> {
    return await this.tickerSymbolRepository.findOneBy({ symbol: symbol });
  }
  async findOneById(id: string): Promise<TickerSymbol> {
    return await this.tickerSymbolRepository.findOneBy({ id: id });
  }
}
