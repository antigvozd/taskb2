import express from 'express';
<<<<<<< HEAD
import canonize from './customize';
=======
>>>>>>> parent of 6be41fe... This is a new commit for what I originally planned to be amended
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

<<<<<<< HEAD
app.get('/task2b', (req, res) => {
	const username = req.query.username != undefined ? canonize(req.query.username) : 'Invalid username';
	res.send(username);
=======
app.get('/task2a', (req, res) => {
	const sum = (+req.query.a || 0) + (+req.query.b || 0);
	res.send(sum.toString());
>>>>>>> parent of 6be41fe... This is a new commit for what I originally planned to be amended
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
