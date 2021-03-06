import { DatabaseType } from 'typeorm';
import Group from 'api/groups/group.entity';
import User from 'api/users/user.entity';

const {
  TYPEORM_DATABASE = 'ngmp20',
  TYPEORM_HOST = 'localhost',
  TYPEORM_LOGGING = false,
  TYPEORM_PASSWORD = 'changeme',
  TYPEORM_PORT = 5432,
  TYPEORM_SYNCHRONIZE = false,
  TYPEORM_USERNAME = 'postgres',
} = process.env;

const postgresDatabase: DatabaseType = 'postgres';
// eslint-disable-next-line import/prefer-default-export
export const typeOrmConfig = {
  database: TYPEORM_DATABASE,
  entities: [Group, User],
  host: TYPEORM_HOST,
  keepConnectionAlive: true,
  logging: Boolean(TYPEORM_LOGGING),
  migrations: [],
  password: TYPEORM_PASSWORD,
  port: Number(TYPEORM_PORT),
  synchronize: Boolean(TYPEORM_SYNCHRONIZE),
  type: postgresDatabase,
  username: TYPEORM_USERNAME,
};
