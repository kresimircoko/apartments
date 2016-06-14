import React from 'react';
import { Router, ReactRouter, Route, IndexRoute, browserHistory } from 'react-router';
import { history } from '../utils/store';

import App from '../components/App';
import Home from '../components/Home';
import NavContainer from '../containers/NavContainer';
import RegisterContainer from '../containers/RegisterContainer';
import DashboardContainer from '../containers/DashboardContainer';
import SingleApartment from '../components/SingleApartment';


const routes = (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/registration' component={RegisterContainer} />
      <Route path='/dashboard' component={DashboardContainer} />
      <Route path='/apartment/:apartmentId' component={SingleApartment} />
    </Route>
  </Router>
)

export default routes;
