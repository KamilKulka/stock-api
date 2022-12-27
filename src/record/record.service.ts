import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { CreateInstrumentTicker } from './dto/create-instrument-ticker.input';
import { TickerSymbolService } from '../ticker-symbol/ticker-symbol.service';
import { TickerSymbol } from '../ticker-symbol/entities/ticker-symbol.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record) private recordRepository: Repository<Record>,
    private tickerSymbolService: TickerSymbolService,
  ) {}
  async createRecord(createRecordSymbolInput: CreateInstrumentTicker) {
    let currentTickerSymbol = await this.tickerSymbolService.findOneBySymbol(
      createRecordSymbolInput.tickerSymbol,
    );
    if (currentTickerSymbol === null) {
      currentTickerSymbol = await this.tickerSymbolService.createWithSymbol(
        createRecordSymbolInput.tickerSymbol,
      );
    }
    const newRecordInput = {
      price: createRecordSymbolInput.price,
      timestamp: createRecordSymbolInput.timestamp,
      ticker: currentTickerSymbol,
      tickerId: currentTickerSymbol.id,
    };
    const newRecord = this.recordRepository.create(newRecordInput);
    return this.recordRepository.save(newRecord);
  }

  async getTicker(tickerId: string): Promise<TickerSymbol> {
    return this.tickerSymbolService.findOneById(tickerId);
  }
}
