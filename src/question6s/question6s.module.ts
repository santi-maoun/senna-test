import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/person.entity';
import { Car } from './cars/car.entity';
import { CarReportsController } from './car-reports/car-reports.controller';
import { CarReportsService } from './car-reports/car-reports.service';

@Module({
    imports: [TypeOrmModule.forFeature([Person, Car])],
    controllers: [CarReportsController],
    providers: [CarReportsService],
})
export class Question6sModule { }
