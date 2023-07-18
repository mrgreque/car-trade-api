import { Router } from 'express';
import { adptExpressRoute } from '../adapters';
import {
  makeAuthenticateUserController,
  makeSaveUserController,
} from '../factories/application/controllers';

export default (router: Router): void => {
  const saveUserController = makeSaveUserController();
  const authenticateUserController = makeAuthenticateUserController();

  router.post('/users', adptExpressRoute(saveUserController));
  router.post('/authenticate', adptExpressRoute(authenticateUserController));
};
