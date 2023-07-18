import { setupLoadPaginatedCarsUseCase } from '@/domain/usecases/load-paginated-cars.usecase';
import { makePgCarsRepository } from '../../infra/repos/postgres/pg-car.factory';

export const makeLoadPaginatedCarsUseCase = () => {
  const loadPaginatedCarsRepository = makePgCarsRepository();
  return setupLoadPaginatedCarsUseCase(loadPaginatedCarsRepository);
};
