import { Inject, Injectable } from '@nestjs/common';
import { Car } from '@lib/db/schemas/cars.schema';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginateDto } from '@lib/db/types/common';

@Injectable()
export class CarsService {
  constructor(
    @Inject(Car.name)
    private readonly CarsdModel: ReturnModelType<typeof Car>,
  ) {}

  async findAll() {
    return await this.CarsdModel.find();
  }

  async findById(id: string) {
    return await this.CarsdModel.findById(id);
  }

  async find({ pageNumber, pageSize }: PaginateDto) {
    const [items, total] = await this.CarsdModel.aggregate([
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

  async insert(insertDto: Car) {
    return await this.CarsdModel.create(insertDto);
  }

  async update(id: string, updateDto: Car) {
    return await this.CarsdModel.findByIdAndUpdate(id, updateDto);
  }

  async remove(id: string) {
    return await this.CarsdModel.findByIdAndDelete(id);
  }
}
