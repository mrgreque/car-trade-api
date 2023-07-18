import { Controller } from './controller';
import { HttpResponse, badRequest, ok } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { SaveCarUseCase } from '@/domain/usecases/save-car.usecase';

type HttpRequest = {
  name: string;
  brand: string;
  model: string;
  city: string;
  state: string;
  year: number;
  modelYear: number;
  km: number;
  transmission: string;
  fuel: string;
  color: string;
  paidIpva: boolean;
  paidLicensing: boolean;
  price: number;
  oldPrice?: number;
  principalImage: string;
  images?: string;
  motorPower: string;
  ports: number;
  description: string;
};

type Model = Error | boolean;

export class SaveCarController extends Controller {
  constructor(private readonly saveCar: SaveCarUseCase) {
    super();
  }

  async perform(car: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.saveCar(car);
      return ok(true);
    } catch (error) {
      return badRequest(error);
    }
  }

  override buildValidators(car: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: car, fieldName: 'car' })
      .required()
      .build();
  }
}
