import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordResolver } from './record.resolver';

@Module({
  providers: [RecordService, RecordResolver]
})
export class RecordModule {}
