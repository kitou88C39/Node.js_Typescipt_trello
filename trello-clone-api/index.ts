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
  try {
    const { title } = req.body;

    const maxPositionListArray = await listRepository.find({
      order: { position: 'DESC' },
      take: 1,
    });

    const maxPositionList = maxPositionListArray[0];

    const maxPosition =
      maxPositionList != null ? maxPositionList.position + 1 : 0;

    const list = await listRepository.save({
      title,
    });

    res.status(201).json(list);
  } catch (error) {
    console.error('リスト作成エラー:', error);
    res.status(500).json({ message: 'リストの作成に失敗しました' });
  }
});

AppDataSource.initialize().then(() => {
  console.log('データベースに接続しました');
  app.listen(PORT, () => {
    console.log(`サーバーが${PORT}で起動しました`);
  });
});
