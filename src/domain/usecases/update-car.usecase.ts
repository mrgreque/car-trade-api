import { LoadCar, UpdateCar } from '../contracts/repos';
import { NotFoundError } from '../entities/errors';

type Setup = (carRepo: UpdateCar & LoadCar) => UpdateCarUseCase;

type Input = UpdateCar.Params;
type Output = void;

export type UpdateCarUseCase = (input: Input) => Promise<Output>;

export const setupUpdateCarUseCase: Setup = (carRepo): UpdateCarUseCase => {
  return async (params) => {
    const car = await carRepo.load({ id: params.id });
    if (!car) throw new NotFoundError('car', 'id', params.id);
    await carRepo.update(params);
  };
};
