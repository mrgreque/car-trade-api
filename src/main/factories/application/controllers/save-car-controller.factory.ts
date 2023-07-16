import { SaveCarController } from '@/application/controllers';
import { makeSaveCarUseCase } from '../../domain/usecases/save-car.factory';

export const makeSaveCarController = (): SaveCarController => {
  const SaveCarUseCase = makeSaveCarUseCase();
  return new SaveCarController(SaveCarUseCase);
};
