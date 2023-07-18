import { LoadCar, LoadPaginatedCars, SaveCar } from '@/domain/contracts/repos';
import { PgRepository } from './repository';
import { PgCar } from './entities';

type LoadParams = LoadCar.Params;
type LoadResult = LoadCar.Result;
type SaveParams = SaveCar.Params;
type LoadPaginatedParams = LoadPaginatedCars.Params;
type LoadPaginatedResult = LoadPaginatedCars.Result;

export class PgCarsRepository
  extends PgRepository
  implements LoadCar, SaveCar, LoadPaginatedCars
{
  async load(params: LoadParams): Promise<LoadResult> {
    const pgCarRepo = this.getRepository(PgCar);
    const pgCar = await pgCarRepo.findOne({ where: { id: params.id } });

    if (!pgCar) return undefined;

    return {
      id: pgCar.id,
      brand: pgCar.brand,
      model: pgCar.model,
      year: pgCar.year,
      city: pgCar.city,
      state: pgCar.state,
      color: pgCar.color,
      description: pgCar.description,
      km: pgCar.km,
      price: pgCar.price,
      fuel: pgCar.fuel,
      motorPower: pgCar.motorPower,
      transmission: pgCar.transmission,
      modelYear: pgCar.modelYear,
      ports: pgCar.ports,
      paidIpva: pgCar.paidIpva,
      name: pgCar.name,
      paidLicensing: pgCar.paidLicensing,
      principalImage: pgCar.principalImage,
      oldPrice: pgCar.oldPrice,
      images: pgCar.images,
      active: pgCar.active,
    };
  }

  async save(params: SaveParams): Promise<void> {
    const pgCarRepo = this.getRepository(PgCar);
    await pgCarRepo.save({
      ...params,
      active: true,
    });
  }

  async loadPaginated(
    params: LoadPaginatedParams,
  ): Promise<LoadPaginatedResult> {
    const pgCarRepo = this.getRepository(PgCar);
    const [cars, total] = await pgCarRepo.findAndCount({
      order: {
        price: 'ASC',
      },
      skip: (params.page - 1) * params.itemsPerPage,
      take: params.itemsPerPage,
    });

    console.log(cars);

    return {
      total,
      cars,
    };
  }
}
