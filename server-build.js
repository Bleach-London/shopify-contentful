'use strict';

require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

///////////////

///////////////
/// MODULES ///
///////////////

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.use(express.static('./public'));

//////////////
/// ROUTES ///
//////////////
app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

//////////////
/// SERVER ///
//////////////

let port = process.env.PORT || 3456;

console.log(process.env.NODE_ENV, port);

if (process.env.NODE_ENV === 'development') {
  let server = http.createServer(app);
  server.listen(port, () => {
    console.log('** localhost server running on *:' + port);
  });
} else {
  app.listen(port);
}
