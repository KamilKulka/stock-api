import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordModule } from './record/record.module';
import { TickerSymbolModule } from './ticker-symbol/ticker-symbol.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'stock-api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RecordModule,
    TickerSymbolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
