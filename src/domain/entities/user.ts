import { uuid } from 'uuidv4';

type UserData = {
  id?: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
};

export class User {
  constructor(userData: UserData) {
    if (!userData.id) {
      userData.id = uuid();
    }

    Object.assign(this, userData);
  }
}
