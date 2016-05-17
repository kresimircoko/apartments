var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;
var heroBg = require('../includes/img/hero_beach.jpg');


var DashboardForm = React.createClass({
  render: function() {
    return (
      <form id="dashboardForm" className="half-section">

        <input className="dashInput subsection" type="text" placeholder="Adresa stana"/>

        <div className="dashInputContainer">
          <input className="dashInput subsection smallInput" type="text" placeholder="Cijena"/>
          <input className="dashInput subsection smallInput" type="text" placeholder="Kvadratura"/>
        </div>

        <div className="dashInputContainer">
          <input className="dashInput subsection smallInput" type="text" placeholder="Broj osoba"/>
          <input className="dashInput subsection smallInput" type="text" placeholder="Broj spavaćih soba"/>
        </div>

        <input className="dashInput subsection" type="text" placeholder="Istaknuta slika"/>

        <textarea className="dashInput subsection" name="optionalDescription" id="optionalDescription" rows="4" placeholder="Opis po želji"></textarea>

        <button
          id="dashSubmit">
          Spremi / Objavi</button>
      </form>
    )
  }
});

DashboardForm.propTypes = {
  myFunc: React.PropTypes.func,
};

module.exports = DashboardForm;
