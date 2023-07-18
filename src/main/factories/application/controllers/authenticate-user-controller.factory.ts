import { AuthenticateUserController } from '@/application/controllers';
import { makeAuthenticateUserUseCase } from '../../domain/usecases/authenticate-user.factory';

export const makeAuthenticateUserController =
  (): AuthenticateUserController => {
    const authenticationUserUseCase = makeAuthenticateUserUseCase();
    return new AuthenticateUserController(authenticationUserUseCase);
  };
