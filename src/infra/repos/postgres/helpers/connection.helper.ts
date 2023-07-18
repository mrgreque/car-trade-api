import { PgCar } from './../entities/car.entity';
import { DbTransaction } from '@/application/contracts';
import {
  ObjectLiteral,
  ObjectType,
  QueryRunner,
  Repository,
  DataSource,
} from 'typeorm';
import {
  ConnectionNotFoundError,
  TransactionNotFoundError,
} from './errors.helper';
import { PgUser } from '../entities';

export class PgConnection implements DbTransaction {
  private static instance?: PgConnection;
  private query?: QueryRunner;
  private dataSource?: DataSource;

  static getInstance(): PgConnection {
    if (PgConnection.instance === undefined) {
      PgConnection.instance = new PgConnection();
    }
    return PgConnection.instance;
  }

  async connect(): Promise<void> {
    this.dataSource = await new DataSource({
      type: process.env.DB_CONNECTION as 'mysql' | 'postgres' | 'mongodb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [PgCar, PgUser],
      synchronize: true,
      logging: false,
    }).initialize();
  }

  async disconnect(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError();
    this.query = undefined;
    this.dataSource.destroy();
  }

  async openTransaction(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError();
    this.query = this.dataSource.createQueryRunner();
    await this.query.startTransaction();
  }

  async closeTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError();
    await this.query.release();
  }

  async commit(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError();
    await this.query.commitTransaction();
  }

  async rollback(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError();
    await this.query.rollbackTransaction();
  }

  getRepository<Entity extends ObjectLiteral>(
    entity: ObjectType<Entity>,
  ): Repository<Entity> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError();
    if (this.query !== undefined)
      return this.query.manager.getRepository(entity);
    return this.dataSource.getRepository(entity);
  }
}
