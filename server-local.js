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

'use strict';

import serverless from 'serverless-http';

const expressApp = require('./express/server');

const functionName = 'serverless-http';

const app = expressApp(functionName);

exports.handler = serverless(app);
