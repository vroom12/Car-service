import { Prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { AVAILABLE_STATUS_TYPE } from '../types/car.type';

export class Car {
  @ApiProperty({ description: '品牌' })
  @Prop()
  brand: string;
  @ApiProperty({ description: '价格' })
  @Prop()
  price: number;
  @ApiProperty({ description: '车型' })
  @Prop()
  car_type: string;
  @ApiProperty({ description: '车牌号' })
  @Prop()
  number_plate: string;
  @ApiProperty({ description: '车颜色' })
  @Prop()
  color: string;
  @ApiProperty({ description: '押金' })
  @Prop()
  deposit: number;
  @ApiProperty({
    description: '可用状态',
    type: () => Number,
    enum: AVAILABLE_STATUS_TYPE,
  })
  @Prop({ type: () => Number, enum: AVAILABLE_STATUS_TYPE })
  available_status: AVAILABLE_STATUS_TYPE;
}
