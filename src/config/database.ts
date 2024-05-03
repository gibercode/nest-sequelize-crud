import { Dialect } from 'sequelize';
import { Product } from 'src/products/products.model';

export default () => {
  const {
    DB_HOST,
    DB_DIALECT,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
  } = process.env;
  return {
    dialect: (DB_DIALECT as Dialect) || 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    autoLoadModels: true,
    synchronize: true,
    models: [Product],
  };
};
