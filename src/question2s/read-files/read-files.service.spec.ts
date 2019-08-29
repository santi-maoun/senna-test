import { Test, TestingModule } from '@nestjs/testing';
import { ReadFilesService } from './read-files.service';

import fs = require('fs');

describe('ReadFilesService', () => {
  let service: ReadFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadFilesService],
    }).compile();

    service = module.get<ReadFilesService>(ReadFilesService);
  });

  describe('read', () => {
    it('should return sorted name by lastname', async () => {
      const file = await new Promise((resolve, _) => {
        fs.readFile('./name.csv', (err, data) => {
          resolve({ buffer: data });
        });
      });

      expect(service.read(file)).toEqual('Frodo Baggins\n' +
        'Bill Gates\n' +
        'Steve Jobs\n' +
        'Michael Jordan\n' +
        'Barack Obama\n' +
        'Christian Ronaldo\n' +
        'Michael Schumacher\n' +
        'Tiger Woods\n');
    });
  });
});
