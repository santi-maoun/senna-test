import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsService } from './greetings.service';

describe('GreetingsService', () => {
  let service: GreetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetingsService],
    }).compile();

    service = module.get<GreetingsService>(GreetingsService);
  });

  describe('greet', () => {
    it('should return greeting with name', () => {
      expect(service.greet('People')).toEqual('Hello, People!');
    });
  });
});
