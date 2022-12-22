import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Record } from '../../record/entities/record.entity';

@Entity()
@ObjectType()
export class TickerSymbol {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  symbol: string;

  @Column()
  @Field()
  currency: string;

  @OneToMany(() => Record, (record) => record.ticker)
  @Field((type) => [Record], { nullable: true })
  records?: Record[];
}
