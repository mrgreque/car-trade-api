import { Controller } from './controller';
import { HttpResponse, ok, unauthorized } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { SaveCarUseCase } from '@/domain/usecases/save-car.usecase';
import { CarData } from '@/domain/contracts/repos';

type HttpRequest = CarData.InputCar;

type Model = Error | boolean;

export class SaveCarController extends Controller {
  constructor(private readonly saveCar: SaveCarUseCase) {
    super();
  }

  async perform(car: HttpRequest): Promise<HttpResponse<Model>> {
    console.log('car', car);
    try {
      await this.saveCar(car);
      return ok(true);
    } catch (error) {
      console.log(error);
      return unauthorized();
    }
  }

  override buildValidators(car: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: car.brand, fieldName: 'brand' })
      .required()
      .build();
  }
}
