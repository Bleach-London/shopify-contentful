'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
app.use(express.static('./public'));

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
  res.end();
});

module.exports = app;
module.exports.handler = serverless(app);
