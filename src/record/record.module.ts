import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordResolver } from './record.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  providers: [RecordService, RecordResolver],
})
export class RecordModule {}
