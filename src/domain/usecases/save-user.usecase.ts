import { IPasswordHash } from '../contracts/gateways/crypto';
import { LoadUserByEmail, SaveUser } from '../contracts/repos';
import { AlreadyExistsError } from '../entities/errors/already-exists.error';

type Setup = (
  userRepo: SaveUser & LoadUserByEmail,
  hashPasswordHandler: IPasswordHash,
) => SaveUserUseCase;
type Input = {
  name: string;
  email: string;
  password: string;
};

type Output = void;
export type SaveUserUseCase = (input: Input) => Promise<Output>;

export const setupSaveUserUseCase: Setup = (
  userRepo,
  hashPasswordHandler,
): SaveUserUseCase => {
  return async (params) => {
    const user = await userRepo.load(params.email);
    if (user) throw new AlreadyExistsError('email');
    params.password = await hashPasswordHandler.hash(params.password);
    await userRepo.save(params);
  };
};
