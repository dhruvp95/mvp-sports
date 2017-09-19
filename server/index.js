const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require('./database/index')
const models = require('./database/models/bracketModel');
const router = require('./router/requestRoutes');


const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/static')));

app.use('/api', router)

app.listen(port, () => {
  console.log(`Successfully listening on port ${port}`);
});

