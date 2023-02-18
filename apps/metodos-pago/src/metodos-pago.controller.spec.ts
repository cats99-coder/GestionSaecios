import { Test, TestingModule } from '@nestjs/testing';
import { MetodosPagoController } from './metodos-pago.controller';
import { MetodosPagoService } from './metodos-pago.service';

describe('MetodosPagoController', () => {
  let metodosPagoController: MetodosPagoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MetodosPagoController],
      providers: [MetodosPagoService],
    }).compile();

    metodosPagoController = app.get<MetodosPagoController>(MetodosPagoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(metodosPagoController.getHello()).toBe('Hello World!');
    });
  });
});
