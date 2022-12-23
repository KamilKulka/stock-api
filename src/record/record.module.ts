import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordResolver } from './record.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { TickerSymbolModule } from '../ticker-symbol/ticker-symbol.module';

@Module({
  imports: [TypeOrmModule.forFeature([Record]), TickerSymbolModule],
  providers: [RecordService, RecordResolver],
})
export class RecordModule {}
