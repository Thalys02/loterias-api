import { LoteriaParametros } from "../shared/loteria-parametros";
let caixaParametros: LoteriaParametros = {
  origem: 'Caixa',
  url: 'https://loterias.caixa.gov.br/Paginas/',
  parametros: {
    nome: '#tituloModalidade',
    concurso:
      '#wp_resultados > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span',
    acumulou:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > h3:nth-child(1)',
    dataResultado:
      '#wp_resultados > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span',
    local:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > p',
    dezenas: '#ulDezenas > li:nth-child(x)',
    premiacoes: [
      {
        acertos:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2) > strong',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2) > span.ng-binding.ng-hide',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2) > span.ng-binding.ng-hide',
      },
      {
        acertos:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > strong',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > span.ng-binding.ng-hide',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > span.ng-binding.ng-hide',
      },
      {
        acertos:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > strong',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > span.ng-binding.ng-hide',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > span.ng-binding.ng-hide',
      },
    ],
    dataProxConcurso:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div.next-prize.clearfix > p:nth-child(1)',
    valorAcumuladoProxConcurso:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div.next-prize.clearfix > p.value.ng-binding',
  },
};

let sorteOnlineParametros: LoteriaParametros = {
  origem: 'Sorte Online',
  url: 'https://www.sorteonline.com.br/{lotterie}/resultados',
  parametros: {
    nome: 'div > div.header-resultados > div > h2',
    concurso:
      'body > div.pg-resultado-loteria > div.container > div > section > div > ul > li.bet__contest > strong',
    acumulou: 'div > div.block-result.color > div > div',
    dataResultado:
      'div > div.header-resultados > div > div > span.color.header-resultados__datasorteio',
    local:
      'div > div.header-resultados > div > div > span.local-sorteio.no-mobile > span',
    dezenas: 'div > div.block-result.color > div > ul > li:nth-child(x)',
    premiacoes: [
      {
        acertos:
          'div > div.block-table > div > div:nth-child(x) > span:nth-child(1)',
        vencedores:
          'div > div.block-table > div > div:nth-child(x) > span:nth-child(2) > span',
        premio:
          'div > div.block-table > div > div:nth-child(x) > span:nth-child(3)',
      },
    ],
    dataProxConcurso:
      'div > div.footer > div.col.estimative.separador > div.sorteio-concurso > span.color.foother-resultados__data-sorteio',
    valorAcumuladoProxConcurso:
      'div > div.footer > div.col.estimative.separador > div.value',
  },
};

let megaLoteriasParametros: LoteriaParametros = {
  origem: 'Mega Loterias',
  url: 'https://www.megaloterias.com.br/{lotterie}/resultados',
  parametros: {
    nome: '#content > header > div > div > div > div > a > div',
    concurso:
      '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > header > div > div.lottery-totem__header-grid__result > div.result__draw > strong',
    acumulou:
      '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > div > div > div > div.result__content__wrap.result__content__wrap--tens > p > strong',
    dataResultado:
      '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > header > div > div.lottery-totem__header-grid__result > div.result__draw-date > strong',
    local:
      '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > header > div > div.lottery-totem__header-grid__result > div.result__local > div > strong',
    dezenas:
      '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > div > div > div > div.result__content__wrap.result__content__wrap--tens > div > div:nth-child(x) > span',
    premiacoes: [
      {
        acertos:
          '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > div > div > div > table > tbody > tr:nth-child(x) > td:nth-child(1)',
        vencedores:
          '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > div > div > div > table > tbody > tr:nth-child(x) > td:nth-child(2)',
        premio:
          '#content > section:nth-child(5) > div:nth-child(3) > div > div > section > div > div > div > table > tbody > tr:nth-child(x) > td:nth-child(3)',
      },
    ],
    dataProxConcurso:
      '#content > header > div > div > div > div > div.lot-header__draw-info > div.lot-header__draw-info__date > span:nth-child(2)',
    valorAcumuladoProxConcurso:
      '#content > header > div > div > div > div > div.lot-header__draw-reward > div.lot-header__draw-prize > span:nth-child(2)',
  },
};


const dictionary = {
  origins: ['Caixa', 'Sorte-Online', 'Mega-Loterias'],
  //TO-DO: Adicionar mais loterias exemplo: lotofacil, quina entre outras.
  lotteries: ['mega-sena'],
  urlApiCaixa: 'https://servicebus2.caixa.gov.br/portaldeloterias/api',
  caixa: caixaParametros,
  sorteOnline: sorteOnlineParametros,
  megaLoterias: megaLoteriasParametros
};

export {dictionary}