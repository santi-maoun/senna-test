import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../question6s/persons/person.entity';
import { Car } from '../question6s/cars/car.entity';
import { CarMoreThan2ReportsController } from './car-more-than2-reports/car-more-than2-reports.controller';
import { CarMoreThan2ReportsService } from './car-more-than2-reports/car-more-than2-reports.service';

@Module({
    imports: [TypeOrmModule.forFeature([Person, Car])],
    controllers: [CarMoreThan2ReportsController],
    providers: [CarMoreThan2ReportsService],
})
export class Question8sModule { }
