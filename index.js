const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');
const router = require('./config/router');
const port = env.port;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');


app.use(morgan('dev'));
mongoose.connect(env.dbUri);
app.use(bodyParser.json());
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));
app.use(express.static(`${__dirname}/public`));
app.use('/api', router);
// NOTE: A very simple error handler.
app.use(function(error, req, res, next) {
  console.log('There was an error', error);
  if (error.name === 'ValidationError') {
    res.status(422).json(error.errors);
  } else if (error) {
    res.status(500).send(error._message);
  } else {
    next();
  }
});


app.listen(port, () => console.log(`Express is running on port ${port}`));

module.exports = app;
