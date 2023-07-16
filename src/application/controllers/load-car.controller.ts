import { LoadCarUseCase } from '@/domain/usecases/load-car.usecase';
import { Controller } from './controller';
import { HttpResponse, ok, unauthorized } from '../helpers';
import { Car } from '@/domain/entities';
import { ValidationBuilder, Validator } from '../validation';

type HttpRequest = { id: number };

type Model = Error | Car;

export class LoadCarController extends Controller {
  constructor(private readonly loadCar: LoadCarUseCase) {
    super();
  }

  async perform({ id }: HttpRequest): Promise<HttpResponse<Model>> {
    console.log(id);
    try {
      const car = await this.loadCar({ id });
      console.log(car);
      return ok(car);
    } catch (error) {
      console.log(error);
      return unauthorized();
    }
  }

  override buildValidators({ id }: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: id, fieldName: 'id' })
      .required()
      .build();
  }
}