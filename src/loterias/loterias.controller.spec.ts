import { Test, TestingModule } from '@nestjs/testing';
import { LoteriasController } from './loterias.controller';

describe('LoteriasController', () => {
  let controller: LoteriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoteriasController],
    }).compile();

    controller = module.get<LoteriasController>(LoteriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
