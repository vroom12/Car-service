import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { User } from '@lib/db/schemas/user.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/auth.local.guard';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from 'src/auth/auth.jwt.guard';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(User.name) private readonly userModel: ReturnModelType<typeof User>,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('curUser')
  async curUser(@Request() req: any) {
    return {
      code: 0,
      data: await this.userService.findOneById(req.user.userId),
      msg: 'success',
    };
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const user = await this.userService.findOneById(id);
    return {
      code: 0,
      data: user,
      msg: 'success',
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    return {
      code: 0,
      data: await this.authService.login(req.user._doc),
      msg: 'success',
    };
  }

  @Post('register')
  async register(@Body() body: User) {
    // console.log(body);
    const user = await this.userService.register(body);
    return {
      code: 0,
      data: user,
      msg: 'success',
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: User) {
    const user = await this.userService.update(id, body);
    return {
      code: 0,
      data: user,
      msg: 'success',
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.userService.delete(id);
    return {
      code: 0,
      data: user,
      msg: 'success',
    };
  }
}
