import { Car } from '@lib/db/schemas/cars.schema';
import { PaginateDto } from '@lib/db/types/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(
    @Inject(Car.name) private readonly carModel: ReturnModelType<typeof Car>,
    private readonly carService: CarsService,
  ) {}

  @Get()
  async findAll() {
    return {
      code: 0,
      data: await this.carService.findAll(),
      msg: 'success',
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return {
      code: 200,
      data: await this.carService.findById(id),
      msg: 'success',
    };
  }

  @Post('insert')
  async insert(@Body() insertDto: Car) {
    return {
      code: 0,
      data: await this.carService.insert(insertDto),
      msg: 'success',
    };
  }

  @Post('findAllByPaginate')
  async findAllByPaginate(@Body() paginateDto: PaginateDto) {
    return {
      code: 0,
      data: await this.carService.find(paginateDto),
      msg: 'success',
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: Car) {
    return {
      code: 0,
      data: await this.carService.update(id, updateDto),
      msg: 'success',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      code: 200,
      data: await this.carService.remove(id),
      msg: 'success',
    };
  }
}
