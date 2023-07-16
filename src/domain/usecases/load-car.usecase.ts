import { LoadCar } from '../contracts/repos';
import { Car } from '../entities';
import { NotFoundError } from '../entities/errors';

type Setup = (carRepo: LoadCar) => LoadCarUseCase;

type Input = {
  id: number;
};
type Output = Car;
export type LoadCarUseCase = (input: Input) => Promise<Output>;

export const setupLoadCarUseCase: Setup = (carReppo): LoadCarUseCase => {
  return async (params) => {
    const loadedCar = await carReppo.load(params);

    if (!loadedCar) throw new NotFoundError('Car', 'id', params.id);

    return loadedCar;
  };
};
