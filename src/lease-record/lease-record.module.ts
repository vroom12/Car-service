import { DbModule } from '@lib/db';
import { LeaseRecord } from '@lib/db/schemas/lease_record.schema';
import { Module } from '@nestjs/common';
import { LeaseRecordController } from './lease-record.controller';
import { LeaseRecordService } from './lease-record.service';

@Module({
  imports: [DbModule.forFeature([LeaseRecord])],
  controllers: [LeaseRecordController],
  providers: [LeaseRecordService],
})
export class LeaseRecordModule {}
