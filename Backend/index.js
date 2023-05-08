const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const usersRouter = require('./admin');

app.use(bodyParser.json());

app.use('/api', usersRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


