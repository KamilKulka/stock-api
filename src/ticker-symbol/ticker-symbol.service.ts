import { Injectable } from '@nestjs/common';
import { CreateTickerSymbolInput } from './dto/create-ticker-symbol.input';
import { UpdateTickerSymbolInput } from './dto/update-ticker-symbol.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TickerSymbol } from './entities/ticker-symbol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TickerSymbolService {
  constructor(
    @InjectRepository(TickerSymbol)
    private tickerSymbolRepository: Repository<TickerSymbol>,
  ) {}
  create(createTickerSymbolInput: CreateTickerSymbolInput) {
    return 'This action adds a new tickerSymbol';
  }

  findAll() {
    return `This action returns all tickerSymbol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tickerSymbol`;
  }

  update(id: number, updateTickerSymbolInput: UpdateTickerSymbolInput) {
    return `This action updates a #${id} tickerSymbol`;
  }

  remove(id: number) {
    return `This action removes a #${id} tickerSymbol`;
  }
}
