const root = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${root}/infra/repos/postgres/entities/index.{js,ts}`],
};
