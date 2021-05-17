const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');
const session = require('express-session');
// const MongoStore = require('connect-mongo');

const ExpressError = require('./utils/ExpressError');
const shoesRoutes = require('./routes/shoes.routes');
const usersRoutes = require('./routes/users.routes');

const sessionConfig = {
  secret: 'temporarysecret',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true },
  // store: MongoStore.create(),
};

app.set('port', process.env.PORT || 3666);

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/shoes', shoesRoutes);
app.use('/', usersRoutes);

app.get('/', (req, res) => {
  res.send('hello from app');
});

app.all('*', (req, res, next) => {
  next(new ExpressError(404, 'Page Not Found...'));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'something went wrong...' } = err;

  res.status(statusCode).json(message);
});

app.listen(app.get('port'), () => {
  console.log(`Listening on PORT: ${app.get('port')}`);
});
