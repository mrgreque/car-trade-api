import { SaveUser } from '@/domain/contracts/repos';
import { PgRepository } from './repository';
import { PgUser } from './entities';

type SaveUserParams = SaveUser.Params;

export class PgUsersRepository extends PgRepository implements SaveUser {
  async save(params: SaveUserParams): Promise<void> {
    const pgUserRepo = this.getRepository(PgUser);
    await pgUserRepo.save({
      ...params,
      active: true,
    });
  }
}
