var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var NavContainer = require('../containers/NavContainer');
var FilterContainer = require('../containers/FilterContainer');
var RegisterContainer = require('../containers/RegisterContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/filter' component={FilterContainer} />
      <Route path='/registration' component={RegisterContainer} />
    </Route>
  </Router>
)

module.exports = routes;

// <Route path='playerOne' header='Player One' component={PromptContainer} />
// <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
// <Route path='battle' component={ConfirmBattleContainer} />
