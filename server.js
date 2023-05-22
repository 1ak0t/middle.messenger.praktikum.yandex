const PORT = 3000;

const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist/`));

app.listen(PORT, function () {
  console.log('Server listening port 3000');
});