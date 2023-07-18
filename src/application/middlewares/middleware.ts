import { HttpResponse } from '../helpers';

export interface IMiddleware {
  handle: (
    request: any,
    response: any,
    next: any,
  ) => Promise<HttpResponse | void>;
}
