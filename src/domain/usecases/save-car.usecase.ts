import { CarData, SaveCar } from '../contracts/repos';

type Setup = (carRepo: SaveCar) => SaveCarUseCase;

type Input = CarData.InputCar;
type Output = void;
export type SaveCarUseCase = (input: Input) => Promise<Output>;

export const setupSaveCarUseCase: Setup = (carReppo): SaveCarUseCase => {
  return async (params) => {
    await carReppo.save(params);
  };
};
