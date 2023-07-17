import { Router } from 'express';
import {
  makeLoadCarController,
  makeSaveCarController,
} from '../factories/application/controllers';
import { adptExpressRoute } from '../adapters';

export default (router: Router): void => {
  const loadCarController = makeLoadCarController();
  const saveCarController = makeSaveCarController();

  router.get('/cars', adptExpressRoute(loadCarController));
  router.post('/cars', adptExpressRoute(saveCarController));
};
