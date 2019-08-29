import { Controller, Get, Header } from '@nestjs/common';
import { CarCountReportsService } from './car-count-reports.service';

@Controller('q7')
export class CarCountReportsController {
    constructor(
        private readonly carCountReportsService: CarCountReportsService,
    ) { }

    @Get()
    @Header('Cache-Control', 'no-cache, no-store')
    async getReport() {
        return this.carCountReportsService.getReport();
    }

    @Get('/orm')
    @Header('Cache-Control', 'no-cache, no-store')
    async getReportWithORM() {
        return this.carCountReportsService.getReportWithORM();
    }
}
