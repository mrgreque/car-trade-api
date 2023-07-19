import { Router } from 'express';
import {
  makeLoadCarController,
  makeLoadPaginatedCarsController,
  makeRemoveCarController,
  makeSaveCarController,
  makeUpdateCarController,
} from '../factories/application/controllers';
import { adptExpressRoute } from '../adapters';
import { makeAuthMiddleware } from '../factories/application/middlewares/auth.factory';

export default (router: Router): void => {
  const loadCarController = makeLoadCarController();
  const saveCarController = makeSaveCarController();
  const loadPaginatedCarsController = makeLoadPaginatedCarsController();
  const updateCarController = makeUpdateCarController();
  const removeCarController = makeRemoveCarController();

  router.get('/car/:id', adptExpressRoute(loadCarController));
  router.post('/car', makeAuthMiddleware, adptExpressRoute(saveCarController));
  router.post('/cars/paginated', adptExpressRoute(loadPaginatedCarsController));
  router.patch(
    '/car/:id',
    makeAuthMiddleware,
    adptExpressRoute(updateCarController),
  );
  router.delete(
    '/car/:id',
    makeAuthMiddleware,
    adptExpressRoute(removeCarController),
  );
};
