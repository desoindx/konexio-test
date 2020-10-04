import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './register';
import User from './user';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path={['/users/:id', '/']} component={User} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
