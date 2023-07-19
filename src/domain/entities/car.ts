type CarData = {
  id?: string;
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

export class Car {
  constructor(carData: CarData) {
    Object.assign(this, carData);
  }
}
