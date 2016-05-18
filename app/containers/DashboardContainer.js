var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DashboardForm = require('../components/DashboardForm');
var DashboardOverview = require('../components/DashboardOverview');

var DashboardContainer = React.createClass({
  render: function() {
    return (
      <section id="dashboardContainer" className="full-container">
        <h4 className="dashboardWelcome">
          Dobrodošli na korisničko sučelje; Kako bi objavili stan za iznajmljivanje sva navedena polja trebaju biti popunjena.
        </h4>
        <div className="container">
          <DashboardForm />
          <DashboardOverview />
        </div>
      </section>
    )
  }
});

module.exports = DashboardContainer;
