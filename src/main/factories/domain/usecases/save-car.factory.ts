import {
  SaveCarUseCase,
  setupSaveCarUseCase,
} from '@/domain/usecases/save-car.usecase';
import { PgCarsRepository } from '@/infra/repos/postgres';

export const makeSaveCarUseCase = (): SaveCarUseCase => {
  const saveCarRepository = new PgCarsRepository();
  return setupSaveCarUseCase(saveCarRepository);
};
