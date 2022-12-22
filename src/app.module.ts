import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordModule } from './record/record.module';
import { TickerSymbolModule } from './ticker-symbol/ticker-symbol.module';

@Module({
  imports: [RecordModule, TickerSymbolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
