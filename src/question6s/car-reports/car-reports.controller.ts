import { Controller, Get, Header } from '@nestjs/common';
import { CarReportsService } from './car-reports.service';

@Controller('q6')
export class CarReportsController {
    constructor(
        private readonly carReportsService: CarReportsService,
    ) { }

    @Get()
    @Header('Cache-Control', 'no-cache, no-store')
    async getReport() {
        return this.carReportsService.getReport();
    }

    @Get('/orm')
    @Header('Cache-Control', 'no-cache, no-store')
    async getReportWithORM() {
        return this.carReportsService.getReportWithORM();
    }
}
