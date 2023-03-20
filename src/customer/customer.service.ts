import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@lib/db/schemas/customer.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginateDto } from '@lib/db/types/common';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(Customer.name)
    private readonly CustomerModel: ReturnModelType<typeof Customer>,
  ) {}

  async findAll() {
    return await this.CustomerModel.find();
  }

  async findById(id: string) {
    return await this.CustomerModel.findById(id);
  }

  async findAllByPaginate(paginateDto: PaginateDto) {
    const { pageNumber, pageSize } = paginateDto;
    const [items, total] = await this.CustomerModel.aggregate([
      {
        $skip: pageNumber > 0 ? (pageNumber - 1) * pageSize : 0,
      },
      {
        $limit: pageSize,
      },
      {
        $count: 'total',
      },
    ]).exec();
    return {
      items,
      total: total[0].total,
    };
  }

  async insert(insertDto: Customer) {
    return await this.CustomerModel.create(insertDto);
  }

  async update(id: string, updateDto: Customer) {
    return await this.CustomerModel.findByIdAndUpdate(id, updateDto);
  }

  async delete(id: string) {
    return await this.CustomerModel.findByIdAndDelete(id);
  }

  async updateByField(id: string, fieldToUpdate: string, value: any) {
    return await this.CustomerModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        [fieldToUpdate]: value,
      },
      {
        new: true,
      },
    );
  }
}
