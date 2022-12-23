import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Record } from './entities/record.entity';
import { RecordService } from './record.service';
import { CreateInstrumentTicker } from './dto/create-record-symbol.input';

@Resolver(() => Record)
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Mutation(() => Record)
  async sendInstrumentTicker(
    @Args('createInstrumentTicker')
    createInstrumentTicker: CreateInstrumentTicker,
  ) {
    return this.recordService.createRecord(createInstrumentTicker);
  }
  @Query(() => [Record])
  async getAllRecords(): Promise<Record[]> {
    return this.recordService.findAll();
  }

  @Query(() => Record)
  async getRecordById(id: string): Promise<Record> {
    return this.recordService.findOne(id);
  }
}
