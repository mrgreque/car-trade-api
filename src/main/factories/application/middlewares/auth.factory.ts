import { AuthMiddleware } from '@/application/middlewares';
import { makeJwtTokenHandler } from '../../infra/gateways/jwt-token-handler.factory';
import { NextFunction, Request, Response } from 'express';

export const makeAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const jwtTokenHandler = makeJwtTokenHandler();
  const authMiddleware = new AuthMiddleware(jwtTokenHandler);
  return authMiddleware.handle(req, res, next);
};
