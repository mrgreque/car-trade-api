import { ITokenHandler } from '@/domain/contracts/gateways/crypto/token-handler';
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtTokenHandler implements ITokenHandler {
  constructor(private readonly secret: string) {}

  async generate(key: string, expirationInMs: number): Promise<string> {
    return jwt.sign({ key }, this.secret, {
      expiresIn: expirationInMs / 1000,
    });
  }

  async verify(token: string): Promise<string> {
    const payload = jwt.verify(token, this.secret) as JwtPayload;
    return payload.key;
  }
}
