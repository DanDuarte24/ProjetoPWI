// models/crime.ts
export interface ICoordenadas {
  lat: number;
  lng: number;
}

export interface ILocalizacao {
  endereco: string;
  coordenadas: ICoordenadas;
}

export interface ICrime {
  id: number;
  nome: string;
  descricao: string;
  localizacao: ILocalizacao;
  data: Date;
}

export class Crime implements ICrime {
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public localizacao: ILocalizacao,
    public data: Date = new Date()
  ) {}
}
