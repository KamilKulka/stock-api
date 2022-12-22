import { Test, TestingModule } from '@nestjs/testing';
import { TickerSymbolService } from './ticker-symbol.service';

describe('TickerSymbolService', () => {
  let service: TickerSymbolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickerSymbolService],
    }).compile();

    service = module.get<TickerSymbolService>(TickerSymbolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
