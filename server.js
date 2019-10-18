'use strict';

const Express = require('express');
const router = require('./lib');
var cors = require('cors');

const app = Express();
const port = process.env.PORT || 3000;

app.use(cors({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}));

app.use('/api/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});
