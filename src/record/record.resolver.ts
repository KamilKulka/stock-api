import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Record } from './entities/record.entity';
import { RecordService } from './record.service';
import { CreateInstrumentTicker } from './dto/create-instrument-ticker.input';
import { TickerSymbol } from '../ticker-symbol/entities/ticker-symbol.entity';

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

  @ResolveField((returns) => TickerSymbol)
  async ticker(@Parent() record: Record): Promise<TickerSymbol> {
    return this.recordService.getTicker(record.tickerId);
  }
}
