import { LeaseRecord } from '@lib/db/schemas/lease_record.schema';
import { Inject, Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { sumBy } from 'lodash';

@Injectable()
export class LeaseRecordService {
  constructor(
    @Inject(LeaseRecord.name)
    private readonly leaseRecordModel: ReturnModelType<typeof LeaseRecord>,
  ) {}

  async findAll() {
    return await this.leaseRecordModel.find();
  }

  async findOne(id: string) {
    return await this.leaseRecordModel.findById(id);
  }

  async insert(LeaseRecord: LeaseRecord) {
    return await this.leaseRecordModel.create(LeaseRecord);
  }

  async delete(id: string) {
    return await this.leaseRecordModel.findByIdAndDelete(id);
  }

  async update(id: string, LeaseRecordItem: any) {
    return await this.leaseRecordModel.findByIdAndUpdate(id, LeaseRecordItem);
  }

  async findByField(id: string, fieldToUpdate: string, value: any) {
    return await this.leaseRecordModel.findByIdAndUpdate(
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

  async statisticsInCustomer(customerId: string, value: string) {
    const customer = await this.leaseRecordModel.find({
      customer_id: customerId,
    });
    // if (!Object.prototype.hasOwnProperty.call(LeaseRecord, `${value}`))
    //   return null;
    let res = 0;
    try {
      customer
        .map((v) => v[value])
        .forEach((i) => {
          res += Number(i);
        });
    } catch (err) {
      res = err;
    }
    return res;
  }

  async findCustomerId(body: { customerId: string }) {
    return await this.leaseRecordModel.find({
      customer_id: body.customerId,
    });
  }
}
