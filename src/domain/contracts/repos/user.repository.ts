export interface UserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
  active: boolean;
}

export interface SaveUser {
  save: (params: SaveUser.Params) => Promise<SaveUser.Result>;
}

export namespace SaveUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };

  export type Result = void;
}

export interface LoadUserByEmail {
  load: (email: string) => Promise<LoadUserByEmail.Result>;
}

export namespace LoadUserByEmail {
  export type Result = UserDTO | null;
}
