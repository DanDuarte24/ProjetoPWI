// models/denuncia.ts
export interface ICoordenadas {
  lat: number;
  lng: number;
}

export interface ILocalizacao {
  endereco: string;
  coordenadas: ICoordenadas;
}

export interface IDenuncia {
  id: number;
  crimeId: number;
  descricao: string;
  nomeDenunciante: string;
  localizacao: ILocalizacao;
  data: Date;
}

export class Denuncia implements IDenuncia {
  constructor(
    public id: number,
    public crimeId: number,
    public descricao: string,
    public nomeDenunciante: string,
    public localizacao: ILocalizacao,
    public data: Date = new Date()
  ) {}
}
