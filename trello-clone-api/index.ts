import express from 'express';
import { AppDataSource } from './datasource';
import cors from 'cors';

const app = express();
const PORT = 8888;
app.use(express.json());
app.use(cors());

const listRepository = AppDataSource.getRepository(List);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/lists', async (req, res) => {
  const { title } = req.body;

  const list = await listRepository.save({ title });
  res.json(list);
});

AppDataSource.initialize().then(() => {
  console.log('データベースに接続しました');
  app.listen(PORT, () => {
    console.log(`サーバーが${PORT}で起動しました`);
  });
});
