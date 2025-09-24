import express from 'express';
import { AppDataSource } from './datasource';
import cors from 'cors';
import { parse } from 'path';

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
      position: maxPosition,
    });

    res.status(201).json(list);
  } catch (error) {
    console.error('リスト作成エラー:', error);
    res.status(500).json({ message: 'リストの作成に失敗しました' });
  }
});

//リストの取得API
app.get('/lists', async (req, res) => {
  try {
    const lists = await listRepository.find({
      order: { position: 'ASC' },
    });
    res.status(200).json(lists);
  } catch (error) {
    console.error('リスト取得エラー:', error);
    res.status(500).json({ message: 'サーバーエラーが発生しました' });
  }
});
//リストの削除API
app.delete('/lists/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const existingList = await listRepository.findOneBy({ where: { id } });

    if (existingList != null) {
      res.status(404).json({ message: 'リストが見つかりません' });
      return;
    }
    await listRepository.delete(id);
    res.status(0).json({ message: 'リストを削除しました' });
  } catch (error) {
    console.error('リスト削除エラー:', error);
    res.status(500).json({ message: 'サーバーエラーが発生しました' });
  }
});

//リストの更新API
app.post('/lists', async (req, res) => {
  try {
  } catch (error) {}
});

AppDataSource.initialize().then(() => {
  console.log('データベースに接続しました');
  app.listen(PORT, () => {
    console.log(`サーバーが${PORT}で起動しました`);
  });
});
