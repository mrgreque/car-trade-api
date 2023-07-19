import { Router } from 'express';
import { adptExpressRoute } from '../adapters';
import {
  makeAuthenticateUserController,
  makeSaveUserController,
} from '../factories/application/controllers';
import { makeAuthMiddleware } from '../factories/application/middlewares/auth.factory';

export default (router: Router): void => {
  const saveUserController = makeSaveUserController();
  const authenticateUserController = makeAuthenticateUserController();

  router.post('/users', adptExpressRoute(saveUserController));
  router.post('/authenticate', adptExpressRoute(authenticateUserController));
  router.get('/validate', makeAuthMiddleware, (_, res) => {
    res.status(204).send();
  });
};
