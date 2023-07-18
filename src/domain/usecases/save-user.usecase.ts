import { IPasswordHash } from '../contracts/gateways/crypto';
import { SaveUser } from '../contracts/repos';

type Setup = (
  userRepo: SaveUser,
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
    params.password = await hashPasswordHandler.hash(params.password);
    await userRepo.save(params);
  };
};
