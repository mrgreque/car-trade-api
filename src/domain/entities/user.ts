type UserData = {
  id?: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
};

export class User {
  constructor(userData: UserData) {
    Object.assign(this, userData);
  }
}
