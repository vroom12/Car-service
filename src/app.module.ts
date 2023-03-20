import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { CustomerModule } from './customer/customer.module';
import { DbModule } from '@lib/db';
import { LeaseRecordModule } from './lease-record/lease-record.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    CarsModule,
    CustomerModule,
    LeaseRecordModule,
    DbModule.forRoot('mongodb://localhost:27017/car-rentalDB'),
    ScheduleModule.forRoot(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
