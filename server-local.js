// const path = require('path');
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
// const express = require('express/server');
// const app = express();

// app.use(express.static('./public'));

// app.get('/', (_, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'));
// });

// app.listen(process.env.PORT, '127.0.0.1', () => {
//   console.log(`Listening on ${process.env.PORT}.`);
// });

// import serverless from 'serverless-http';

// const expressApp = require('./express/server');

// const functionName = 'serverless-http';

// const app = expressApp(functionName);

// module.exports = app;
// module.exports.handler = serverless(app);

'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static('./public'));

app.use(bodyParser);

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

module.exports.handler = serverless(app);
