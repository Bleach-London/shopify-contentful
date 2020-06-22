'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
app.use(express.static('./public'));

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

module.exports = app;
module.exports.handler = serverless(app);
