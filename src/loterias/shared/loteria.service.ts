import { Injectable, NotFoundException } from '@nestjs/common';
import { LoteriaResultado } from './loteria-resultado';
import { dictionary } from '../constants/dictionary';
import {WebScrapingCaixa, WebScrapingMegaLoterias, WebScrapingSorteOnline } from '../scraping/web-scraping';
@Injectable()
export class LoteriaService {
  
  getLotteries() {
    return dictionary.lotteries;
  }

  getOrigins() {
    return dictionary.origins;
  }

  async getByLotteries(lotteries: string, origin: string) {
    return await this.extractData(lotteries, origin);
  }

  async extractData(lotteries: string, origin: string) {
    let resultado = new LoteriaResultado();
    switch (origin) {
      case 'Caixa':
        resultado = await WebScrapingCaixa(lotteries);
        console.log("🚀 ~ file: loteria.service.ts ~ line 25 ~ LoteriaService ~ extractData ~ resultado", resultado)
        return resultado;
      case 'Sorte-Online':
        resultado = await WebScrapingSorteOnline(lotteries);
        console.log("🚀 ~ file: loteria.service.ts ~ line 28 ~ LoteriaService ~ extractData ~ resultado", resultado)
        return resultado;
      case 'Mega-Loterias':
        resultado = await WebScrapingMegaLoterias(lotteries);
        console.log("🚀 ~ file: loteria.service.ts ~ line 33 ~ LoteriaService ~ extractData ~ resultado", resultado)
        return resultado;
      default:
        throw new NotFoundException('🚀 ~ Por gentileza passar uma origem existente ~ ')
    }
  }
}
