const mongoose = require('mongoose');
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.EB_URL
    : 'mongodb://localhost/shoepreme';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(instance => {
    console.log(`Connected to MongoDB: ${instance.connections[0].name}`);
  })
  .catch(err => {
    console.log('Connection Failed!', err);
  });

module.exports = mongoose;
