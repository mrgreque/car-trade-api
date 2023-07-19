/* eslint-disable @typescript-eslint/no-namespace */
export namespace CarData {
  export type Car = {
    id: number;
    name: string;
    brand: string;
    model: string;
    city: string;
    state: string;
    year: number;
    modelYear: number;
    km: number;
    transmission: string;
    fuel: string;
    color: string;
    paidIpva: boolean;
    paidLicensing: boolean;
    price: number;
    oldPrice?: number;
    principalImage: string;
    images?: string;
    motorPower: string;
    ports: number;
    description?: string;
    active: boolean;
  };

  export type InputCar = {
    name: string;
    brand: string;
    model: string;
    city: string;
    state: string;
    year: number;
    modelYear: number;
    km: number;
    transmission: string;
    fuel: string;
    color: string;
    paidIpva: boolean;
    paidLicensing: boolean;
    price: number;
    oldPrice?: number;
    principalImage: string;
    images?: string;
    motorPower: string;
    ports: number;
    description?: string;
  };
}

export interface LoadCar {
  load: (params: LoadCar.Params) => Promise<LoadCar.Result>;
}

export namespace LoadCar {
  export type Params = {
    id: number;
  };

  export type Result = undefined | CarData.Car;
}

export interface UpdateCar {
  update: (params: UpdateCar.Params) => Promise<UpdateCar.Result>;
}

export namespace UpdateCar {
  export type Params = CarData.Car;

  export type Result = void;
}

export interface SaveCar {
  save: (params: SaveCar.Params) => Promise<void>;
}

export namespace SaveCar {
  export type Params = CarData.InputCar;
}

export interface LoadPaginatedCars {
  loadPaginated: (
    params: LoadPaginatedCars.Params,
  ) => Promise<LoadPaginatedCars.Result>;
}

export namespace LoadPaginatedCars {
  export type Params = {
    page: number;
    itemsPerPage: number;
    order: 'ASC' | 'DESC';
  };

  export type Result = {
    total: number;
    cars: CarData.Car[];
  };
}

export interface RemoveCar {
  remove: (params: RemoveCar.Params) => Promise<RemoveCar.Result>;
}

export namespace RemoveCar {
  export type Params = {
    id: number;
  };

  export type Result = void;
}
