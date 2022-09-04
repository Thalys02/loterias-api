import { Premiacao } from "./premiacao";

export class LoteriaParametros {
    origem:string;
    url:string;
    parametros:{
        nome: string;
        concurso: string;
        acumulou: string;
        dataResultado: string;
        local: string;
        dezenas: string;
        premiacoes: Array<Premiacao>;
        valorAcumuladoProxConcurso: string;
        dataProxConcurso: string;
    }

}
