var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var NavContainer = require('../containers/NavContainer');
var RegisterContainer = require('../containers/RegisterContainer');
var DashboardContainer = require('../containers/DashboardContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/registration' component={RegisterContainer} />
      <Route path='/dashboard' component={DashboardContainer} />
    </Route>
  </Router>
)

module.exports = routes;
