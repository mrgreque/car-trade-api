import { setupLoadPaginatedCarsUseCase } from '@/domain/usecases/load-paginated-cars.usecase';
import { PgCarsRepository } from '@/infra/repos/postgres';

export const makeLoadPaginatedCarsUseCase = () => {
  const loadPaginatedCarsRepository = new PgCarsRepository();
  return setupLoadPaginatedCarsUseCase(loadPaginatedCarsRepository);
};
