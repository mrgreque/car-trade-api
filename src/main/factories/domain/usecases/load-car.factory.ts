import {
  LoadCarUseCase,
  setupLoadCarUseCase,
} from '@/domain/usecases/load-car.usecase';
import { makePgCarsRepository } from '../../infra/repos/postgres/pg-car.factory';

export const makeLoadCarUseCase = (): LoadCarUseCase => {
  const loadCarRepository = makePgCarsRepository();
  return setupLoadCarUseCase(loadCarRepository);
};
