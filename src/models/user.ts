// models/user.ts
export interface IUser {
    id: number;
    username: string;
    password: string;
  }
  
  export class User implements IUser {
    constructor(
      public id: number,
      public username: string,
      public password: string
    ) {}
  }
  