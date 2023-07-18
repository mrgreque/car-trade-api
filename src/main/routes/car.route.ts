import { Router } from 'express';
import {
  makeLoadCarController,
  makeLoadPaginatedCarsController,
  makeSaveCarController,
} from '../factories/application/controllers';
import { adptExpressRoute } from '../adapters';

export default (router: Router): void => {
  const loadCarController = makeLoadCarController();
  const saveCarController = makeSaveCarController();
  const loadPaginatedCarsController = makeLoadPaginatedCarsController();

  router.get('/cars', adptExpressRoute(loadCarController));
  router.post('/cars', adptExpressRoute(saveCarController));
  router.get('/cars/paginated', adptExpressRoute(loadPaginatedCarsController));
};
