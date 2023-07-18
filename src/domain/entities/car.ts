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
  description: string;
  active: boolean;
};

export class Car {
  constructor(carData: CarData) {
    // if (!carData.id) {
    //   carData.id = Math.random().toString(36).substr(2, 9);
    // }

    Object.assign(this, carData);
  }
}
