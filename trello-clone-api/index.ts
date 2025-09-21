import express from 'express';
import { AppDataSource } from './datasource';

const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

AppDataSource.initialize().then(() => {
  console.log('データベースに接続しました');
  app.listen(PORT, () => {
    console.log(`サーバーが${PORT}で起動しました`);
  });
});
