import express from 'express';
import { AppDataSource } from './datasource';

const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log('サーバーが起動しました');
});
