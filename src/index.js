import express from 'express';
import canonize from './customize';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2b', (req, res) => {
	const username = req.query.username != undefined ? canonize(req.query.username) : 'Invalid username';
	res.send(username);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
