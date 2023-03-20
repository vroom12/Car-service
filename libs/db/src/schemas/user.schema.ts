import { modelOptions, Prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  options: { allowMixed: 0 },
})
export class User {
  // 姓名
  @Prop()
  @ApiProperty({ description: '姓名' })
  name: string;
  // 邮箱
  @Prop()
  @ApiProperty({ description: '邮箱' })
  email: string;
  // 密码
  @Prop()
  @ApiProperty({ description: '密码' })
  password: string;
  // 用户名
  @Prop()
  @ApiProperty({ description: '用户名' })
  username: string;
  // 手机号
  @Prop()
  @ApiProperty({ description: '手机号' })
  phone: string;
  // 头像
  @Prop()
  @ApiProperty({ description: '头像' })
  avatar: any;
}
