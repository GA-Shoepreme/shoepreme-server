const express = require('express');
const cors = require('cors');
const app = express();

const usersController = require('./controllers/users.controller');
const shoesController = require('./controllers/shoes.controller');

app.set('port', process.env.PORT || 3666);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersController);
app.use('/shoes', shoesController);

app.get('/', (req, res) => {
  res.send('hello from app');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`);
});
