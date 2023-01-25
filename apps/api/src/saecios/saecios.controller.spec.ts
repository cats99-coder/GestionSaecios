import { Test, TestingModule } from '@nestjs/testing';
import { SaeciosController } from './saecios.controller';

describe('SaeciosController', () => {
  let controller: SaeciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaeciosController],
    }).compile();

    controller = module.get<SaeciosController>(SaeciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
