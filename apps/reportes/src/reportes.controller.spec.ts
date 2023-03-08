import { Test, TestingModule } from '@nestjs/testing';
import { ReportesController } from './reportes.controller';
import { ReportesService } from './reportes.service';

describe('ReportesController', () => {
  let reportesController: ReportesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReportesController],
      providers: [ReportesService],
    }).compile();

    reportesController = app.get<ReportesController>(ReportesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reportesController.getHello()).toBe('Hello World!');
    });
  });
});
