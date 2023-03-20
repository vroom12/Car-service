import { Customer } from '@lib/db/schemas/customer.schema';
import { PaginateDto } from '@lib/db/types/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { CustomerService } from './customer.service';

type pageType = {
  page: number;
  pageSize: number;
};

@Controller('customer')
export class CustomerController {
  constructor(
    @Inject(Customer.name)
    private readonly customerModel: ReturnModelType<typeof Customer>,
    private readonly customerService: CustomerService,
  ) {}

  @Get()
  async findAll() {
    return {
      code: 0,
      data: await this.customerService.findAll(),
      msg: 'success',
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return {
      code: 0,
      data: await this.customerService.findById(id),
      msg: 'success',
    };
  }

  @Post('findAllByPaginate')
  async findAllByPaginate(@Body() paginateDto: PaginateDto) {
    return {
      code: 0,
      data: await this.customerService.findAllByPaginate(paginateDto),
      msg: 'success',
    };
  }

  @Post('insert')
  async insert(@Body() insertDto: Customer) {
    return {
      code: 0,
      data: await this.customerService.insert(insertDto),
      msg: 'success',
    };
  }

  @Patch('updateCustomer/:id')
  async update(@Param('id') id: string, @Body() updateDto: Customer) {
    return {
      code: 0,
      data: await this.customerService.update(id, updateDto),
      msg: 'success',
    };
  }

  @Patch('updateCustomerByField/:id')
  async updateByField(
    @Param('id') id: string,
    @Body()
    fieldDto: {
      fieldToUpdate: string;
      value: any;
    },
  ) {
    return {
      code: 0,
      data: await this.customerService.updateByField(
        id,
        fieldDto.fieldToUpdate,
        fieldDto.value,
      ),
      msg: 'success',
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return {
      code: 0,
      data: await this.customerService.delete(id),
      msg: 'success',
    };
  }
}
