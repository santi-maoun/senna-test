import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../question6s/persons/person.entity';
import { Car } from '../question6s/cars/car.entity';
import { CarCountReportsController } from './car-count-reports/car-count-reports.controller';
import { CarCountReportsService } from './car-count-reports/car-count-reports.service';

@Module({
    imports: [TypeOrmModule.forFeature([Person, Car])],
    controllers: [CarCountReportsController],
    providers: [CarCountReportsService],
})
export class Question7sModule { }
