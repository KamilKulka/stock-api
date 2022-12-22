import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TickerSymbol } from '../../ticker-symbol/entities/ticker-symbol.entity';
@Entity()
@ObjectType()
export class Record {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  timestamp: Date;

  @Column()
  @Field()
  price: number;

  @ManyToOne(() => TickerSymbol, (tickerSymbol) => tickerSymbol.records)
  @Field((type) => TickerSymbol)
  ticker: TickerSymbol;
}
