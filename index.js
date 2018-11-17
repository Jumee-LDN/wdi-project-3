const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');
const router = require('./config/router');
const port = env.port;
const bodyParser = require('body-parser');

mongoose.connect(env.dbUri);
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => console.log(`Express is running on port ${port}`));
