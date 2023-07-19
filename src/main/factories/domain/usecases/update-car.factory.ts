import { setupUpdateCarUseCase } from '@/domain/usecases/update-car.usecase';
import { makePgCarsRepository } from '../../infra/repos/postgres/pg-car.factory';

export const makeUpdateCarUseCase = () => {
  const carRepo = makePgCarsRepository();
  return setupUpdateCarUseCase(carRepo);
};
