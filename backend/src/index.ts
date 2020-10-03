import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import 'ts-polyfill/lib/es2020-string';

const app = express();

app.use(bodyParser.json({ limit: '25mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

const httpsServer = http.createServer(app);
httpsServer.listen(8443, () => {
  console.log('Listening on port 8443!');
});

app.get('/helloworld', (req, res) => {
  res.json({text: 'Hello World'});
});
