import {
  SaveCarUseCase,
  setupSaveCarUseCase,
} from '@/domain/usecases/save-car.usecase';
import { makePgCarsRepository } from '../../infra/repos/postgres/pg-car.factory';

export const makeSaveCarUseCase = (): SaveCarUseCase => {
  const saveCarRepository = makePgCarsRepository();
  return setupSaveCarUseCase(saveCarRepository);
};
