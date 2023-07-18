import { setupSaveUserUseCase } from '@/domain/usecases/save-user.usecase';
import { makePgUsersRepository } from '../../infra/repos/postgres/pg-user.repository';
import { makePasswordHash } from '../../infra/gateways/password-hash.factory';

export const makeSaveUserUseCase = () => {
  const saveUserRepository = makePgUsersRepository();
  const passwordHashHandler = makePasswordHash();
  return setupSaveUserUseCase(saveUserRepository, passwordHashHandler);
};
