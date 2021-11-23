const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('tiny'));


app.listen(port, () => {
  console.log(`listening on port:${port}`);
})