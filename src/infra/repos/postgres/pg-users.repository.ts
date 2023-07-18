import { LoadUserByEmail } from './../../../domain/contracts/repos/user.repository';
import { SaveUser } from '@/domain/contracts/repos';
import { PgRepository } from './repository';
import { PgUser } from './entities';

type SaveUserParams = SaveUser.Params;
type LoadUserByEmailResult = LoadUserByEmail.Result | null;

export class PgUsersRepository
  extends PgRepository
  implements SaveUser, LoadUserByEmail
{
  async save(params: SaveUserParams): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser);
    await pgUserRepo.save({
      ...params,
      active: true,
    });
  }

  async load(email: string): Promise<LoadUserByEmailResult> {
    const pgUserRepo = this.getRepository(PgUser);
    const user = await pgUserRepo.findOneBy({ email, active: true });

    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      active: user.active,
    };
  }
}
