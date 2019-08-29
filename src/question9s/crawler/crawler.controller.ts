import { Controller, Get, Header } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('q9')
export class CrawlerController {
    constructor(
        private readonly crawlerService: CrawlerService,
    ) { }

    @Get()
    @Header('Cache-Control', 'no-cache, no-store')
    async getReport() {
        return this.crawlerService.crawlImages();
    }
}
