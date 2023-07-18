import { IPasswordHash } from '@/domain/contracts/gateways/crypto';
import bcrypt from 'bcrypt';

export class PasswordHash implements IPasswordHash {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async compare(password: string, passwordHash: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }
}
