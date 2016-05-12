var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Home = require('../js/pages/Home');
var Main = require('../js/pages/Main');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

module.exports = routes;
