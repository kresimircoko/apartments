import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';

import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './utils/store';

import stylesheet from './includes/scss/base.scss';

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
