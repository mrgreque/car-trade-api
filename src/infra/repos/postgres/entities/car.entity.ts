import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class PgCar {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  brand!: string;

  @Column()
  model!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  year!: number;

  @Column({ name: 'model_year' })
  modelYear!: number;

  @Column()
  km!: number;

  @Column()
  transmission!: string;

  @Column()
  fuel!: string;

  @Column()
  color!: string;

  @Column({ name: 'paid_ipva' })
  paidIpva!: boolean;

  @Column({ name: 'paid_licensing' })
  paidLicensing!: boolean;

  @Column()
  price!: number;

  @Column({ name: 'old_price', nullable: true })
  oldPrice?: number;

  @Column({ name: 'principal_image' })
  principalImage!: string;

  @Column({ name: 'images', nullable: true })
  images?: string;

  @Column({ name: 'motor_power' })
  motorPower!: string;

  @Column()
  ports!: number;

  @Column()
  description!: string;
}
