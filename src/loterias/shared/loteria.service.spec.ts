import { Test, TestingModule } from '@nestjs/testing';
import { LoteriaService } from './loteria.service';

describe('LoteriaService', () => {
  let provider: LoteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoteriaService],
    }).compile();

    provider = module.get<LoteriaService>(LoteriaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
