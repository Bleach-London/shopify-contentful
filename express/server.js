'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>App install running</h1>');
  res.write('<script src="./bundle.js"></script>');
  res.end();
});

// router.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
//   res.end();
// });

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
