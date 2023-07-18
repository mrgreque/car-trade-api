import { AuthenticateUserUseCase } from '@/domain/usecases/authenticate-user.usecase';
import { HttpResponse, ok, unauthorized } from '../helpers';
import { Controller } from './controller';

type HttpRequest = {
  email: string;
  password: string;
};

type Model = Error | { accessToken: string; id: number };

export class AuthenticateUserController extends Controller {
  constructor(private readonly authenticateUser: AuthenticateUserUseCase) {
    super();
  }

  async perform({
    email,
    password,
  }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const authenticatedUser = await this.authenticateUser({
        email,
        password,
      });
      return ok(authenticatedUser);
    } catch (error) {
      return unauthorized();
    }
  }
}
