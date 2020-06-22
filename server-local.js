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

const app = require('./express/server');

app.listen(3000, () => console.log('Local app listening on port 3000!'));
