import { SaveUserUseCase } from '@/domain/usecases/save-user.usecase';
import { HttpResponse, badRequest, ok } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { Controller } from './controller';

type HttpRequest = {
  email: string;
  password: string;
  name: string;
};

type Model = Error | boolean;

export class SaveUserController extends Controller {
  constructor(private readonly saveUser: SaveUserUseCase) {
    super();
  }

  async perform(user: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.saveUser(user);
      return ok(true);
    } catch (error) {
      return badRequest(error);
    }
  }

  override buildValidators(user: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: user, fieldName: 'user' })
      .required()
      .build();
  }
}
