import { Test, TestingModule } from '@nestjs/testing';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

describe('ProductosController', () => {
  let productosController: ProductosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductosController],
      providers: [ProductosService],
    }).compile();

    productosController = app.get<ProductosController>(ProductosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productosController.getHello()).toBe('Hello World!');
    });
  });
});
