import { LoadCar, SaveCar } from '@/domain/contracts/repos';
import { PgRepository } from './repository';
import { PgCar } from './entities';

type LoadParams = LoadCar.Params;
type LoadResult = LoadCar.Result;
type SaveParams = SaveCar.Params;

export class PgCarsRepository extends PgRepository implements LoadCar, SaveCar {
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
    };
  }

  async save(params: SaveParams): Promise<void> {
    console.log(params);
    const pgCarRepo = this.getRepository(PgCar);
    console.log(JSON.stringify(pgCarRepo));
    await pgCarRepo.save(params);
  }
}
