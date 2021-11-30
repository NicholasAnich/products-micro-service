const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
const morgan = require('morgan');
const router = require('./routes/router');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

app.get('/', (request, response) => {
  response.status(200).send('Node.js Express, and Postgres API')
})

app.listen(port, () => {
  console.log(`listening on port:${port}`);
})

module.exports = app;