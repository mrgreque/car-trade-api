export interface UserDTO {
  id: string;
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
