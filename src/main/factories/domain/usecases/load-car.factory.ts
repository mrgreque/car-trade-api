import { LoadCarUseCase, setupLoadCarUseCase } from "@/domain/usecases/load-car.usecase";

export const makeLoadCarUseCase = (): LoadCarUseCase => {
  retrun setupLoadCarUseCase(
    loadCar
  )
}
