import { LoadCarController } from '@/application/controllers';
import { makeLoadCarUseCase } from '../../domain/usecases/load-car.factory';

export const makeLoadCarController = (): LoadCarController => {
  const loadCarUseCase = makeLoadCarUseCase();
  return new LoadCarController(loadCarUseCase);
};
