import { Test, TestingModule } from '@nestjs/testing';
import { LeaseRecordController } from './lease-record.controller';

describe('DrivingRecordController', () => {
  let controller: LeaseRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaseRecordController],
    }).compile();

    controller = module.get<LeaseRecordController>(LeaseRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
