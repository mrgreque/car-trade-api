import { ITokenHandler } from '@/domain/contracts/gateways/crypto/token-handler';
import { IMiddleware } from './middleware';

export class AuthMiddleware implements IMiddleware {
  constructor(private readonly jwtTokenHandler: ITokenHandler) {}

  async handle(request: any, response: any, next: any): Promise<void> {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const [, token] = authHeader.split(' ');
    if (!token) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      const userId = await this.jwtTokenHandler.verify(token);
      request.userId = userId;
      next();
    } catch (error) {
      response.status(401).json({ error: 'Unauthorized' });
    }
  }
}
