import { Injectable, Logger } from '@nestjs/common';

import request = require('request');
import cheerio = require('cheerio');
import fs = require('fs');

@Injectable()
export class CrawlerService {
    private readonly logger = new Logger(this.constructor.name);

    async crawlImages(): Promise<string> {
        return new Promise((resolve, reject) => {
            const URL = 'https://www.bnk48.com/index.php?page=members';

            request(URL, (err: any, res: any, body: any) => {
                if (err) {
                    this.logger.log(err);

                    reject(err);
                } else {
                    const $ = cheerio.load(body);

                    $('.divMemMembers').each(async (index: any, element: any) => {
                        const imageName = $(element).find('.ImgMem').attr('style')
                            .split('background-image: url(')[1]
                            .split(')')[0];

                        const imageUrl = 'https://www.bnk48.com/' + imageName;

                        const name = $(element).find('.nameMem').text().trim();

                        await this.download(imageUrl, './bnk-download/' + name + '.png');

                        this.logger.log(imageUrl);
                    });

                    resolve('HBD! Kwang Tung! All images are in bnk-download folder');
                }
            });
        });
    }

    private download(uri: string, filename: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            request.head(uri, (err, res, body) => {
                if (err) {
                    reject(reject);
                }

                request(uri).pipe(fs.createWriteStream(filename)).on('close', () => { resolve(true); });
            });
        });
    }
}
