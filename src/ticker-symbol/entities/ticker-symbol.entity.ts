import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Record } from '../../record/entities/record.entity';

@Entity()
@ObjectType()
export class TickerSymbol {
  @PrimaryColumn()
  @Field()
  symbol: string;

  @OneToMany(() => Record, (record) => record.ticker)
  @Field(() => [Record], { nullable: true })
  records?: Record[];
}
