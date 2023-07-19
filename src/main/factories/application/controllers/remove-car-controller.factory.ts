import { RemoveCarController } from '@/application/controllers';
import { makeRemoveCarUseCase } from '../../domain/usecases';

export const makeRemoveCarController = () => {
  const removeCarUseCase = makeRemoveCarUseCase();
  return new RemoveCarController(removeCarUseCase);
};
