import { DbModule } from '@lib/db';
import { Car } from '@lib/db/schemas/cars.schema';
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [DbModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
