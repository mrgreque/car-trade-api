import { Router } from 'express';
import { adptExpressRoute } from '../adapters';
import { makeSaveUserController } from '../factories/application/controllers';

export default (router: Router): void => {
  const saveUserController = makeSaveUserController();

  router.post('/users', adptExpressRoute(saveUserController));
};
