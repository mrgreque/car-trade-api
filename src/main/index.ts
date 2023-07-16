import 'module-alias';
import { PgConnection } from '@/infra/repos/postgres/helpers';
import { env } from './config/env';

PgConnection.getInstance()
  .connect()
  .then(async () => {
    const { app } = await import('./config/app');
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    );
  })
  .catch((error) => console.log(error));
