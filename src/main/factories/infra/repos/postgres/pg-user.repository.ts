import { PgUsersRepository } from '@/infra/repos/postgres';

export const makePgUsersRepository = () => {
  return new PgUsersRepository();
};
