import { Prop, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from './customer.schema';
import { Car } from './cars.schema';
import mongoose from 'mongoose';

export class LeaseRecord {
  @ApiProperty({ description: '外键,与客户信息表中的id关联' })
  @Prop({ ref: () => Customer })
  customer_id: Ref<Customer>;

  @ApiProperty({ description: '外键,与汽车信息表中的id关联' })
  @Prop({ ref: () => Car })
  car_id: Ref<Car>;

  @ApiProperty({ description: '客户租借汽车的开始日期和时间' })
  @Prop()
  rent_date: Date;

  @ApiProperty({
    description: '客户归还汽车的日期和时间。如果客户尚未归还汽车则为Null',
  })
  @Prop()
  return_date: Date;

  @ApiProperty({ description: '客户租借汽车的总天数' })
  @Prop()
  total_days: number;

  @ApiProperty({ description: '汽车每日出租费用' })
  @Prop({ type: mongoose.Types.Decimal128 })
  rental_rate: mongoose.Types.Decimal128;

  @ApiProperty({ description: '客户归还汽车后逾期id罚款' })
  @Prop({ type: mongoose.Types.Decimal128 })
  late_fee: mongoose.Types.Decimal128;

  @ApiProperty({ description: '总租金费用' })
  @Prop({ type: mongoose.Types.Decimal128 })
  total_rental_fee: mongoose.Types.Decimal128;
}
