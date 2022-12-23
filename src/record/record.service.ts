import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { CreateInstrumentTicker } from './dto/create-record-symbol.input';
import { TickerSymbolService } from '../ticker-symbol/ticker-symbol.service';
import { CreateRecordInput } from './dto/create-record.input';

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
    const newRecordInput = new CreateRecordInput();
    newRecordInput.price = createRecordSymbolInput.price;
    newRecordInput.timestamp = createRecordSymbolInput.timestamp;
    newRecordInput.ticker = currentTickerSymbol;
    const newRecord = this.recordRepository.create(newRecordInput);
    return this.recordRepository.save(newRecord);
  }
  async findAll(): Promise<Record[]> {
    return this.recordRepository.find();
  }

  async findOne(id: string): Promise<Record> {
    return this.recordRepository.findOneBy({ id: id });
  }
}
