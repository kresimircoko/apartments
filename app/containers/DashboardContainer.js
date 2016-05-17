var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Dashboard = require('../components/Dashboard');

var DashboardContainer = React.createClass({
  render: function() {
    return (
      <section id="dashboardContainer" className="full-container">
        <h4 className="dashboardWelcome">
          Dobrodošli na korisničko sučelje; Kako bi objavili stan za iznajmljivanje sva navedena polja trebaju biti popunjena.
        </h4>
        <Dashboard />
      </section>
    )
  }
});

module.exports = DashboardContainer;
