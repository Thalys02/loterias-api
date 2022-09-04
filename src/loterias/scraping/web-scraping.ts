import puppeteer from 'puppeteer'
import * as cheerio from 'cheerio';
import { setTimeout } from "timers/promises";
import { filterInt } from '../utils/filterInt';
import { LoteriaResultado } from '../shared/loteria-resultado';
import { dictionary } from '../constants/dictionary';

export async function WebScrapingCaixa(lotteries: string) {
  let caixaParametros = dictionary.caixa;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let urlToScrapping = caixaParametros.url + lotteries + '.aspx';
  await page.goto(urlToScrapping);
  //Delay de 2 segundos para esperar a pagina carregar as informações
  await setTimeout(2000);
  let html = await page.content();
  const $ = cheerio.load(html);

  let resultado = new LoteriaResultado();
  resultado.nome = lotteries;
  resultado.concurso = filterInt(
    $(caixaParametros.parametros.concurso).text().substring(9, 13),
  );

  resultado.acumulou =
    $(caixaParametros.parametros.acumulou).text().includes('Acumulou!');
  resultado.dataResultado = $(caixaParametros.parametros.dataResultado)
    .text()
    .substring(15, 25);
  resultado.local = $(caixaParametros.parametros.local)
    .text()
    .substring(29, 82);

  let qnDezenasMega = 6;
  for (var i = 1; i <= qnDezenasMega; i++) {
    resultado.dezenas.push(
      $(caixaParametros.parametros.dezenas.replace('(x)', `(${i})`)).text(),
    );
  }

  caixaParametros.parametros.premiacoes.map((premiacao) => {
    let acertos = $(premiacao.acertos).text();
    let vencedores = $(premiacao.vencedores).text();
    let premio = $(premiacao.premio).text();

    resultado.premiacoes.push({
      acertos: acertos,
      vencedores: vencedores.split(', ')[0],
      premio: premio.split(', ')[1],
    });
  });

  resultado.dataProxConcurso = $(caixaParametros.parametros.dataProxConcurso)
    .text()
    .substring(33, 84);
  let valorAcumulado = $(
    caixaParametros.parametros.valorAcumuladoProxConcurso,
  ).text();

  resultado.valorAcumuladoProxConcurso = valorAcumulado
    .split('\n')[1]
    .substring(32);
  browser.close();
  return resultado;
}

export async function WebScrapingSorteOnline(lotteries: string) {
    let sorteOnlineParametros = dictionary.sorteOnline;
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let urlToScrapping = sorteOnlineParametros.url.replace(
      '{lotterie}',
      lotteries,
    );
    await page.goto(urlToScrapping);
    //Delay de 2 segundos para esperar a pagina carregar as informações
    await setTimeout(2000);
    let html = await page.content();
    const $ = cheerio.load(html);
  
    let resultado = new LoteriaResultado();
    resultado.nome = lotteries;
    resultado.concurso = filterInt(
      $(sorteOnlineParametros.parametros.concurso).text().split('\n')[1],
    );
  
    resultado.acumulou = $(sorteOnlineParametros.parametros.acumulou)
      .text()
      .includes('ACUMULOU!');

    resultado.dataResultado = $(sorteOnlineParametros.parametros.dataResultado)
      .text();

    resultado.local = $(sorteOnlineParametros.parametros.local)
      .text();
  
    let qnDezenasMega = 6;
    for (var i = 1; i <= qnDezenasMega; i++) {
      resultado.dezenas.push(
        $(sorteOnlineParametros.parametros.dezenas.replace('(x)', `(${i})`)).text(),
      );
    }
    let qnPremiacoes = 3;
    for(var i = 1; i<=qnPremiacoes;i++){
      let premiacaoIndice = i + 1;
      let acertos =
        sorteOnlineParametros.parametros.premiacoes[0].acertos.replace(
          '(x)',
          `(${premiacaoIndice})`,
        );
      let vencedores =
        sorteOnlineParametros.parametros.premiacoes[0].vencedores.replace(
          '(x)',
          `(${premiacaoIndice})`,
        );
      let premio =
        sorteOnlineParametros.parametros.premiacoes[0].premio.replace(
          '(x)',
          `(${premiacaoIndice})`,
        );

      resultado.premiacoes.push({
        acertos: $(acertos).text(),
        vencedores: $(vencedores).text(),
        premio: $(premio).text(),
      });
    }
  
    resultado.dataProxConcurso = $(sorteOnlineParametros.parametros.dataProxConcurso)
      .text();

    let valorAcumulado = $(
      sorteOnlineParametros.parametros.valorAcumuladoProxConcurso,
    ).text();
  
    resultado.valorAcumuladoProxConcurso =
      'R$ ' + valorAcumulado.split('\n')[2];
    browser.close();
    return resultado;
  }

  export async function WebScrapingMegaLoterias(lotteries: string) {
    let megaLoteriasParametros = dictionary.megaLoterias;
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let urlToScrapping = megaLoteriasParametros.url.replace(
      '{lotterie}',
      lotteries,
    );
    await page.goto(urlToScrapping);
    //Delay de 3 segundos para esperar a pagina carregar as informações
    await setTimeout(3000);
    let html = await page.content();
    const $ = cheerio.load(html);
  
    let resultado = new LoteriaResultado();
    resultado.nome = lotteries;
    resultado.concurso = filterInt(
      $(megaLoteriasParametros.parametros.concurso).text(),
    );
  
    resultado.acumulou = $(megaLoteriasParametros.parametros.acumulou)
      .text()
      .includes('ACUMULOU!');

    resultado.dataResultado = $(megaLoteriasParametros.parametros.dataResultado)
      .text();

    resultado.local = $(megaLoteriasParametros.parametros.local)
      .text();
  
    let qnDezenasMega = 6;
    for (var i = 1; i <= qnDezenasMega; i++) {
      resultado.dezenas.push(
        $(megaLoteriasParametros.parametros.dezenas.replace('(x)', `(${i})`)).text(),
      );
    }
    let qnPremiacoes= 3;
    for(var i = 1; i<=qnPremiacoes;i++){
        let premiacaoIndice = i + 1;
        let acertos =
        megaLoteriasParametros.parametros.premiacoes[0].acertos.replace(
            '(x)',
            `(${premiacaoIndice})`,
          );
        let vencedores =
        megaLoteriasParametros.parametros.premiacoes[0].vencedores.replace(
            '(x)',
            `(${premiacaoIndice})`,
          );
        let premio =
        megaLoteriasParametros.parametros.premiacoes[0].premio.replace(
            '(x)',
            `(${premiacaoIndice})`,
          );
  
        resultado.premiacoes.push({
          acertos: $(acertos).text(),
          vencedores: $(vencedores).text(),
          premio: $(premio).text(),
        });
      }
  
    resultado.dataProxConcurso = $(megaLoteriasParametros.parametros.dataProxConcurso)
      .text();

    let valorAcumulado = $(
        megaLoteriasParametros.parametros.valorAcumuladoProxConcurso,
    ).text();
  
    resultado.valorAcumuladoProxConcurso = 'R$ ' + valorAcumulado;
    browser.close();
    return resultado;
  }
