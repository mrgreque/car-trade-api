import { DbTransaction } from '../contracts';
import { Controller } from '../controllers';
import { HttpResponse } from '../helpers';

export class DbTransactionController extends Controller {
  constructor(
    private readonly decoratee: Controller,
    private readonly db: DbTransaction,
  ) {
    super();
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    await this.db.openTransaction();
    try {
      const httpResponse = await this.decoratee.perform(httpRequest);
      await this.db.commit();
      return httpResponse;
    } catch (error) {
      await this.db.rollback();
      throw error;
    } finally {
      await this.db.closeTransaction();
    }
  }
}
