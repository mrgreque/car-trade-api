import { Controller } from '@/application/controllers';
import { Request, RequestHandler, Response } from 'express';

type Adapter = (controller: Controller) => RequestHandler;

export const adptExpressRoute: Adapter = (controller) => {
  return async (req: Request, res: Response) => {
    console.log('req.body', req.body);
    const { statusCode, data } = await controller.handle({
      ...req.body,
    });
    const json = [200, 204].includes(statusCode)
      ? data
      : { error: data.message };
    res.status(statusCode).json(json);
  };
};
