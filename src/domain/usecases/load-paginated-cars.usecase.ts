import { LoadPaginatedCars } from '../contracts/repos';
import { Car } from '../entities';

type Setup = (carRepo: LoadPaginatedCars) => LoadPaginatedCarsUseCase;
type Input = {
  page: number;
  itemsPerPage: number;
};
type Output = {
  total: number;
  cars: Car[] | [];
};

export type LoadPaginatedCarsUseCase = (input: Input) => Promise<Output>;
export const setupLoadPaginatedCarsUseCase: Setup = (
  carRepo,
): LoadPaginatedCarsUseCase => {
  return async (params) => {
    const paginatedCars = await carRepo.loadPaginated(params);

    return paginatedCars;
  };
};
