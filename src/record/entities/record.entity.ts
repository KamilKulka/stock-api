import { Field, Float, ObjectType } from '@nestjs/graphql';
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

  @Column({ type: 'real' })
  @Field(() => Float)
  price: number;

  @Column()
  @Field()
  tickerId: string;

  @ManyToOne(() => TickerSymbol, (tickerSymbol) => tickerSymbol.records)
  @Field((type) => TickerSymbol)
  ticker: TickerSymbol;
}
