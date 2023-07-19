import { UpdateCarController } from '@/application/controllers';
import { makeUpdateCarUseCase } from '../../domain/usecases';

export const makeUpdateCarController = () => {
  const updateCarUseCase = makeUpdateCarUseCase();
  return new UpdateCarController(updateCarUseCase);
};
