import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export const setupRoutes = (app: Express): void => {
  const router = Router();

  console.log('process.env.TS_NODE_DEV', process.env.TS_NODE_DEV);

  console.log('__dirname', __dirname);
  console.log('join(__dirname, ../routes)', join(__dirname, '../routes'));

  const routerFiles = readdirSync(join(__dirname, '../routes'));
  console.log('routerFiles', routerFiles);
  const routesFilesFiltered: any = routerFiles.filter(
    (file) => !file.toString().endsWith('.map'),
  );
  routesFilesFiltered.map(async (file: any) => {
    (await import(`../routes/${file}`)).default(router);
  });
  app.use(router);
};
