import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { LoteriaService } from './shared/loteria.service';
import { LoteriaResultado } from './shared/loteria-resultado';
import { dictionary } from './constants/dictionary';
import axios from "axios";

@Controller('loterias')
export class LoteriasController {
  constructor(
    private loteriaService: LoteriaService,
  ) { }

  @Get()
  async getLotteries(): Promise<string[]> {
    return this.loteriaService.getLotteries();
  }
  @Get('/origens')
  async getOrigins(): Promise<string[]> {
    return this.loteriaService.getOrigins();
  }

  @Get('/api/loteria/:loteria/concurso/:concurso')
  async getLotteriesByConcourse(
    @Param('loteria') loteria: string,
    @Param('concurso') concurso: string,
  ): Promise<any> {
    
    const options = {
      method: 'GET',
      url: `${dictionary.urlApiCaixa}/${loteria}/${concurso}`
    };
    
    axios.request(options).then(function (response) {
      console.log('sucesso:'+response.data);
    }).catch(function (error) {
      console.log("🚀 ~ file: loterias.controller.ts ~ line 41 ~ LoteriasController ~ error", error)
    });
    // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  }

  @Get('/origem/:origem/loteria/:loteria')
  async getLatestByLotteries(
    @Param('origem') origem: string,
    @Param('loteria') loteria: string,
  ): Promise<LoteriaResultado> {
    return this.loteriaService.getByLotteries(loteria, origem);
  }
}
