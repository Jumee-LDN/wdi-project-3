const express = require('express');
const app = express();
const env = require('./config/environment');
const port = env.port;
const mongoose = require('mongoose');

mongoose.connect(env.dbUri);

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is running on port ${port}`));

module.exports = app;
