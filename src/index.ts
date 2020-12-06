import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { Validator } from 'node-input-validator';

import 'ts-polyfill/lib/es2020-string';
import {
  userValidator, addUser, getUsers, modifyUser,
} from './user';

const app = express();
var port = process.env.PORT || 8443;

app.use(bodyParser.json({ limit: '25mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
  res.send();
});

app.use(express.static(path.join(__dirname, '../build')));

const httpsServer = http.createServer(app);
httpsServer.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

app.post('/register', (req, res) => {
  const v = new Validator(req.body, userValidator);

  v.check().then((matched) => {
    if (!matched) {
      res.status(422).send(v.errors);
    } else {
      addUser(req.body);
      res.end();
    }
  });
});

app.put('/user/:id', (req, res) => {
  const v = new Validator(req.body, userValidator);

  v.check().then((matched) => {
    if (!matched) {
      res.status(422).send(v.errors);
    } else {
      modifyUser(req.params.id, req.body);
      res.end();
    }
  });
});

app.get('/users', (req, res) => {
  res.json({ users: getUsers() });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});