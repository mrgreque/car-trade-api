import { HttpResponse, badRequest, serverError } from '../helpers';
import { ValidationBuilder, Validator } from '../validation';
import { ValidationComposite } from '../validation/composite';

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<HttpResponse>;

  async handle(httpRequest: any): Promise<HttpResponse> {
    const error = this.validate(httpRequest);
    if (error) {
      return badRequest(error);
    }

    try {
      return await this.perform(httpRequest);
    } catch (error) {
      return serverError(error);
    }
  }

  private validate(httpRequest: any): Error | undefined {
    const validators = this.buildValidators(httpRequest);
    return new ValidationComposite([...validators]).validate();
  }

  buildValidators(httpRequest: any): Validator[] {
    return [];
  }
}
