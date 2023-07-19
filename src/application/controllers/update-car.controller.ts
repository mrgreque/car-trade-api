import { Controller } from './controller';
import { HttpResponse, badRequest, ok } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { UpdateCarUseCase } from '@/domain/usecases/update-car.usecase';

type HttpRequest = {
  id: number;
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
  active: boolean;
};

type Model = Error | boolean;

export class UpdateCarController extends Controller {
  constructor(private readonly updateCar: UpdateCarUseCase) {
    super();
  }

  async perform(car: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.updateCar(car);
      return ok(true);
    } catch (error) {
      return badRequest(error);
    }
  }

  override buildValidators(car: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: car.id, fieldName: 'id' })
      .required()
      .build();
  }
}
