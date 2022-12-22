import { Test, TestingModule } from '@nestjs/testing';
import { TickerSymbolResolver } from './ticker-symbol.resolver';
import { TickerSymbolService } from './ticker-symbol.service';

describe('TickerSymbolResolver', () => {
  let resolver: TickerSymbolResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickerSymbolResolver, TickerSymbolService],
    }).compile();

    resolver = module.get<TickerSymbolResolver>(TickerSymbolResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
