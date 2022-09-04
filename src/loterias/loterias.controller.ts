import { Controller, Get, Param } from '@nestjs/common';
import { LoteriaService } from './shared/loteria.service';
import { LoteriaResultado } from './shared/loteria-resultado';

@Controller('loterias')
export class LoteriasController {
  constructor(private loteriaService: LoteriaService) {}

  @Get()
  async getLotteries(): Promise<string[]> {
    return this.loteriaService.getLotteries();
  }
  @Get('/origens')
  async getOrigins(): Promise<string[]> {
    return this.loteriaService.getOrigins();
  }


  @Get('/origem/:origem/loteria/:loteria')
  async getByLotteries(
    @Param('origem') origem: string,
    @Param('loteria') loteria: string,
  ): Promise<LoteriaResultado> {
    return this.loteriaService.getByLotteries(loteria, origem);
  }
}
