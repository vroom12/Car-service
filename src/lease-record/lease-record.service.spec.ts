import { Test, TestingModule } from '@nestjs/testing';
import { LeaseRecordService } from './lease-record.service';

describe('LeaseRecordService', () => {
  let service: LeaseRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaseRecordService],
    }).compile();

    service = module.get<LeaseRecordService>(LeaseRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
