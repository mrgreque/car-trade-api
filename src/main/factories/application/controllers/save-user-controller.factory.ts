import { SaveUserController } from '@/application/controllers';
import { makeSaveUserUseCase } from '../../domain/usecases';

export const makeSaveUserController = () => {
  const saveUserUseCase = makeSaveUserUseCase();
  return new SaveUserController(saveUserUseCase);
};
