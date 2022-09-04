import { Premiacao } from "./premiacao";

export class LoteriaResultado {
  nome: string;
  concurso: number;
  acumulou: boolean;
  dataResultado: string;
  local: string;
  dezenas: Array<string> = [];
  premiacoes: Array<Premiacao> = [];
  valorAcumuladoProxConcurso: string;
  dataProxConcurso: string;
  proximoConcurso: number;
}
