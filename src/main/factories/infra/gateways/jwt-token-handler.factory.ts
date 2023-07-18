import { JwtTokenHandler } from '@/infra/gateways/crypto';
import { env } from '@/main/config/env';

export const makeJwtTokenHandler = () => {
  const secret = env.jwtSecret;
  if (!secret) throw new Error('Missing JWT secret');
  return new JwtTokenHandler(secret);
};
