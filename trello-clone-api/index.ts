import express from 'express';

const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

//ルーティングを作成する
app.get('/test', (req, res) => {
  res.send('Hello World');
});

//URLパラメータとクエリパラメータを受け取る
app.get('/users/:id', (req, res) => {
  res.send(`User Id is ${req.params.id}.Name is ${req.query.name}`);
});

app.listen(PORT, () => {
  console.log('サーバーが起動しました');
});
