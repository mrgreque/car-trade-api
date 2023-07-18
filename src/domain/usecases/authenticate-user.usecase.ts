import { IPasswordHash } from '../contracts/gateways/crypto';
import { ITokenHandler } from '../contracts/gateways/crypto/token-handler';
import { LoadUserByEmail } from '../contracts/repos';
import { AuthenticationError } from '../entities/errors/authentication.error';

type Setup = (
  userRepo: LoadUserByEmail,
  tokenHandler: ITokenHandler,
  passwordHashHandler: IPasswordHash,
) => AuthenticateUserUseCase;

type Input = {
  email: string;
  password: string;
};

type Output = {
  accessToken: string;
  id: number;
};

export type AuthenticateUserUseCase = (input: Input) => Promise<Output>;

export const setupAuthenticateUserUseCase: Setup = (
  userRepo,
  tokenHandler,
  passwordHashHandler,
): AuthenticateUserUseCase => {
  return async (params) => {
    const user = await userRepo.load(params.email);
    if (!user) throw new AuthenticationError();

    const isValidPassword = await passwordHashHandler.compare(
      params.password,
      user.password,
    );
    if (!isValidPassword) throw new AuthenticationError();

    const accessToken = await tokenHandler.generate(
      user.id.toString(),
      60 * 20 * 1000, // 20 minutes
    );
    return {
      accessToken,
      id: user.id,
    };
  };
};
