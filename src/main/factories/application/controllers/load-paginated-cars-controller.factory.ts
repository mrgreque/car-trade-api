import { LoadPaginatedCarsController } from '@/application/controllers';
import { makeLoadPaginatedCarsUseCase } from '../../domain/usecases';

export const makeLoadPaginatedCarsController = () => {
  const loadPaginatedCarsUseCase = makeLoadPaginatedCarsUseCase();
  return new LoadPaginatedCarsController(loadPaginatedCarsUseCase);
};
