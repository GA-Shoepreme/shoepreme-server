const express = require('express');
const cors = require('cors');
const app = express();

const usersRoutes = require('./routes/users.routes');
const shoesRoutes = require('./routes/shoes.routes');

app.set('port', process.env.PORT || 3666);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoutes);
app.use('/shoes', shoesRoutes);

app.get('/', (req, res) => {
  res.send('hello from app');
});

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`);
});
