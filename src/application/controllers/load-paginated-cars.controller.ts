import { Controller } from './controller';
import { badRequest, HttpResponse, ok } from '../helpers';
import { Car } from '@/domain/entities';
import { ValidationBuilder, Validator } from '../validation';
import { LoadPaginatedCarsUseCase } from '@/domain/usecases/load-paginated-cars.usecase';

type HttpRequest = {
  page: number;
  itemsPerPage: number;
};

type Model =
  | Error
  | {
      total: number;
      cars: Car[] | [];
    };

export class LoadPaginatedCarsController extends Controller {
  constructor(private readonly loadPaginatedCars: LoadPaginatedCarsUseCase) {
    super();
  }

  async perform({
    page,
    itemsPerPage,
  }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const paginatedCars = await this.loadPaginatedCars({
        page,
        itemsPerPage,
      });
      return ok(paginatedCars);
    } catch (error) {
      return badRequest(error);
    }
  }

  override buildValidators(params: HttpRequest): Validator[] {
    return ValidationBuilder.of({ value: params, fieldName: 'params' })
      .required()
      .build();
  }
}
