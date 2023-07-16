import {
  LoadCarUseCase,
  setupLoadCarUseCase,
} from '@/domain/usecases/load-car.usecase';
import { PgCarsRepository } from '@/infra/repos/postgres';

export const makeLoadCarUseCase = (): LoadCarUseCase => {
  const loadCarRepository = new PgCarsRepository();
  return setupLoadCarUseCase(loadCarRepository);
};
