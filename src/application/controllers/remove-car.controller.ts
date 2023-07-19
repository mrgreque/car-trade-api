import { Controller } from './controller';
import { HttpResponse, badRequest, ok } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { RemoveCarUseCase } from '@/domain/usecases/remove-car.usecase';

type HttpRequest = {
  id: number;
};

type Model = Error | boolean;

export class RemoveCarController extends Controller {
  constructor(private readonly removeCar: RemoveCarUseCase) {
    super();
  }

  async perform(car: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.removeCar(car);
      return ok(true);
    } catch (error) {
      return badRequest(error);
    }
  }

  override buildValidators({ id }: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: id, fieldName: 'id' })
      .required()
      .build();
  }
}
