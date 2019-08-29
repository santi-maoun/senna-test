import { Controller, Get, Header } from '@nestjs/common';
import { CarMoreThan2ReportsService } from './car-more-than2-reports.service';

@Controller('q8')
export class CarMoreThan2ReportsController {
    constructor(
        private readonly carMoreThan2ReportsService: CarMoreThan2ReportsService,
    ) { }

    @Get()
    @Header('Cache-Control', 'no-cache, no-store')
    async getReport() {
        return this.carMoreThan2ReportsService.getReport();
    }

    @Get('/orm')
    @Header('Cache-Control', 'no-cache, no-store')
    async getReportWithORM() {
        return this.carMoreThan2ReportsService.getReportWithORM();
    }
}
