import { PgCarsRepository } from '@/infra/repos/postgres';

export const makePgCarsRepository = (): PgCarsRepository => {
  return new PgCarsRepository();
};
