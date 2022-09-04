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
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2)',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2)',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(2)',
      },
      {
        acertos:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > strong',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > span.ng-binding.ng-hide',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(3) > span.ng-binding.ng-hide',
      },
      {
        acertos:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > strong',
        premio:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > span.ng-binding.ng-hide',
        vencedores:
          '#wp_resultados > div.content-section.section-text.with-box.column-right.no-margin-top > div > p:nth-child(4) > span.ng-binding.ng-hide',
      },
    ],
    dataProxConcurso:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div.next-prize.clearfix > p:nth-child(1)',
    valorAcumuladoProxConcurso:
      '#wp_resultados > div.content-section.section-text.with-box.column-left.no-margin-top > div > div > div.next-prize.clearfix > p.value.ng-binding',
  },
};

const dictionary = {
  origins: ['Caixa', 'Sorte-Online', 'Mega-loterias'],
  lotteries: ['mega-sena', 'lotofacil', 'quina'],
  caixa: caixaParametros
};

export {dictionary}