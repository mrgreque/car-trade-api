import { setupAuthenticateUserUseCase } from '@/domain/usecases/authenticate-user.usecase';
import { makePgUsersRepository } from '../../infra/repos/postgres/pg-user.repository';
import { makeJwtTokenHandler } from '../../infra/gateways/jwt-token-handler.factory';
import { makePasswordHash } from '../../infra/gateways/password-hash.factory';

export const makeAuthenticateUserUseCase = () => {
  const makeUserRepository = makePgUsersRepository();
  const makeTokenHandler = makeJwtTokenHandler();
  const passwordHashHandler = makePasswordHash();

  return setupAuthenticateUserUseCase(
    makeUserRepository,
    makeTokenHandler,
    passwordHashHandler,
  );
};
