import { setupRemoveCar } from '@/domain/usecases/remove-car.usecase';
import { makePgCarsRepository } from '../../infra/repos/postgres/pg-car.factory';

export const makeRemoveCarUseCase = () => {
  const carRepo = makePgCarsRepository();
  return setupRemoveCar(carRepo);
};
