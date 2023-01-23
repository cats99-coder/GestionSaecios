import { Test, TestingModule } from '@nestjs/testing';
import { SaeciosController } from './saecios.controller';
import { SaeciosService } from './saecios.service';

describe('SaeciosController', () => {
  let saeciosController: SaeciosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SaeciosController],
      providers: [SaeciosService],
    }).compile();

    saeciosController = app.get<SaeciosController>(SaeciosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(saeciosController.getHello()).toBe('Hello World!');
    });
  });
});
