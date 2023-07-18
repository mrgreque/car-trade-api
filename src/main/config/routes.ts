import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export const setupRoutes = (app: Express): void => {
  const router = Router();

  const routerFiles = readdirSync(join(__dirname, '../routes'));

  const routesFilesFiltered: any = routerFiles.filter(
    (file) => !file.toString().endsWith('.map'),
  );
  routesFilesFiltered.map(async (file: any) => {
    (await import(`../routes/${file}`)).default(router);
  });
  app.use(router);
};
