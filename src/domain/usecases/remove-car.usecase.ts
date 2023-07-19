import { LoadCar, RemoveCar } from '../contracts/repos';
import { NotFoundError } from '../entities/errors';

type Setup = (carRepo: RemoveCar & LoadCar) => RemoveCarUseCase;

type Input = RemoveCar.Params;
type Output = RemoveCar.Result;

export type RemoveCarUseCase = (input: Input) => Promise<Output>;

export const setupRemoveCar: Setup = (carRepo) => async (input) => {
  const car = await carRepo.load(input);
  if (!car) throw new NotFoundError('Car not found', 'id', input.id);
  await carRepo.remove(input);
};
