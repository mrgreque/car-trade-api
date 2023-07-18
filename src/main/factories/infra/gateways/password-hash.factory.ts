import { PasswordHash } from '@/infra/gateways/crypto/password-hash';

export const makePasswordHash = (): PasswordHash => {
  return new PasswordHash();
};
