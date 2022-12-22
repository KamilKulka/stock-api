import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Record {
  @Field()
  id: string;
  @Field()
  timestamp: Date;
  @Field()
  price: number;
}
