import { Prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { GENDER_TYPE } from '../types/customer.type';

@modelOptions({
  options: { allowMixed: 0 },
})
export class Customer {
  @ApiProperty({ description: '姓名' })
  @Prop()
  name: string;
  @ApiProperty({ description: '联系方式' })
  @Prop()
  phone: string;
  @ApiProperty({ description: '地址' })
  @Prop()
  address: string;
  @ApiProperty({ description: '性别' })
  @Prop({ type: () => Number, enum: GENDER_TYPE })
  gender: GENDER_TYPE;
  @ApiProperty({ description: '积分' })
  @Prop()
  integral: number;
}
