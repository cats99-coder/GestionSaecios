import { Test, TestingModule } from '@nestjs/testing';
import { SaeciosService } from './saecios.service';

describe('SaeciosService', () => {
  let service: SaeciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaeciosService],
    }).compile();

    service = module.get<SaeciosService>(SaeciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
