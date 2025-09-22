import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'trello-clone.sqlite',
  synchronize: true,
  logging: false,
  entities: ['entity/*.entity.ts'],
  migrations: ['src/migration/*.ts'],
  subscribers: ['src/subscriber/*.ts'],
});
