var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DashboardForm = require('../components/DashboardForm');
var DashboardOverview = require('../components/DashboardOverview');

var DashboardContainer = React.createClass({
  render: function() {
    return (
      <section id="dashboardContainer" className="full-container">
        <section className="container dbAddApartments">
          <div className="quarter-section subsection">
          <i className="fa fa-plus"></i><h3>Dodaj stan</h3>
          </div>
        </section>
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
