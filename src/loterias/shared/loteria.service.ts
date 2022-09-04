import { Injectable } from '@nestjs/common';
import { LoteriaResultado } from './loteria-resultado';
import { Premiacao } from './premiacao';
import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio';
import { dictionary } from '../constants/dictionary';
import { LoteriaParametros } from './loteria-parametros';
import { filterInt } from '../utils/filterInt';
@Injectable()
export class LoteriaService {
  caixaParametros = dictionary.caixa;

  getLotteries() {
    return dictionary.lotteries;
  }

  getOrigins() {
    return dictionary.origins;
  }

  async getByLotteries(lotteries: string, origin: string) {
    let teste = await this.extractData(lotteries, origin);
    console.log("🚀 ~ file: loteria.service.ts ~ line 53 ~ LoteriaService ~ getByLotteries ~ teste", teste)
    return teste;
  }

  async extractData(lotteries: string, origin: string) {
    if (origin === 'Caixa') {
      let resultado =  await this.webScrapingCaixa(this.caixaParametros, lotteries);
      return resultado;
    }
    return null;
  }

  async  webScrapingCaixa(parametros:LoteriaParametros,lotteries:string):Promise<LoteriaResultado>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let urlToScrapping = this.caixaParametros.url + lotteries + '.aspx';
    await page.goto(urlToScrapping);
    let html = await page.content();
    const $ = cheerio.load(html);

    let resultado = new LoteriaResultado();
    resultado.nome = lotteries;
    resultado.concurso = filterInt(
      $(this.caixaParametros.parametros.concurso).text().substring(9, 13),
    );
    resultado.acumulou =
      $(this.caixaParametros.parametros.acumulou).text() === 'Acumulou!';
    resultado.dataResultado = $(this.caixaParametros.parametros.dataResultado)
      .text()
      .substring(15, 25);
    resultado.local = $(this.caixaParametros.parametros.local)
      .text()
      .substring(29, 82);

    let qnDezenasMega = 6;
    for (var i = 1; i <= qnDezenasMega; i++) {
      resultado.dezenas.push(
        $(
          this.caixaParametros.parametros.dezenas.replace('(x)', `(${i})`),
        ).text(),
      );
    }

    let premiacoes = new Premiacao();

    this.caixaParametros.parametros.premiacoes.map((premiacao) => {
      let acertos = $(premiacao.acertos).text();
      let vencedores = $(premiacao.vencedores).text();
      let premio = $(premiacao.premio).text();

      premiacoes.acertos = acertos
        ? acertos.split('\n')[1].substring(24, 33)
        : '';

      premiacoes.vencedores = vencedores
        ? vencedores.split('\n')[2].substring(24, 33)
        : '';

      premiacoes.premio = premio ? premio.split('\n')[2].substring(47) : '';
    });
    resultado.premiacoes.push(premiacoes);

    resultado.dataProxConcurso = $(
      this.caixaParametros.parametros.dataProxConcurso,
    )
      .text()
      .substring(33, 84);
    let valorAcumulado = $(
      this.caixaParametros.parametros.valorAcumuladoProxConcurso,
    ).text();

    resultado.valorAcumuladoProxConcurso = valorAcumulado
      ? valorAcumulado.split('\n')[1].substring(32)
      : '';

    browser.close();
    return resultado;
  }
}
