const path = require('path');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}.`);
});