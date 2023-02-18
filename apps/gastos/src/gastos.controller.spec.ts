import { Test, TestingModule } from '@nestjs/testing';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';

describe('GastosController', () => {
  let gastosController: GastosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GastosController],
      providers: [GastosService],
    }).compile();

    gastosController = app.get<GastosController>(GastosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gastosController.getHello()).toBe('Hello World!');
    });
  });
});
