import {
  Controller,
  Post,
  Inject,
  Body,
  Delete,
  Patch,
  Get,
  Param,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { LeaseRecord } from '@lib/db/schemas/lease_record.schema';
import { LeaseRecordService } from './lease-record.service';

@Controller('lease_record')
export class LeaseRecordController {
  constructor(
    @Inject(LeaseRecord.name)
    private readonly leaseRecordModel: ReturnModelType<typeof LeaseRecord>,
    private readonly leaseRecordService: LeaseRecordService,
  ) {}

  @Get()
  async findAll() {
    return {
      code: 0,
      data: await this.leaseRecordService.findAll(),
      msg: 'success',
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      code: 0,
      data: await this.leaseRecordService.findOne(id),
      msg: 'success',
    };
  }

  @Post('insert')
  async insert(@Body() insterDto: LeaseRecord) {
    return {
      code: 0,
      data: await this.leaseRecordService.insert(insterDto),
      msg: 'success',
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return {
      code: 0,
      data: await this.leaseRecordService.delete(id),
      msg: 'success',
    };
  }

  @Patch('update')
  async update(@Body() updateDto: { id: string; body: any }) {
    return {
      code: 0,
      data: await this.leaseRecordService.update(updateDto.id, updateDto.body),
      msg: 'success',
    };
  }

  @Patch('findByField')
  async findByField(
    @Body() fieldDto: { id: string; field: string; value: any },
  ) {
    return {
      code: 0,
      data: await this.leaseRecordService.findByField(
        fieldDto.id,
        fieldDto.field,
        fieldDto.value,
      ),
      msg: 'success',
    };
  }

  @Post('statisticsInCustomer')
  async statisticsInCustomer(
    @Body() body: { customerId: string; value: string },
  ) {
    return {
      code: 0,
      data: await this.leaseRecordService.statisticsInCustomer(
        body.customerId,
        body.value,
      ),
      msg: 'success',
    };
  }

  @Post('findBuCustomerId')
  async findCustomerId(@Body() body: { customerId: string }) {
    return {
      code: 0,
      data: await this.leaseRecordService.findCustomerId(body),
      msg: 'success',
    };
  }
}
