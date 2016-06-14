import React from 'react';
import { ReactRouter, Link } from 'react-router';
import DashboardForm from '../components/DashboardForm';
import DashboardOverview from '../components/DashboardOverview';

var DashboardContainer = React.createClass({
  render () {
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

export default DashboardContainer;
