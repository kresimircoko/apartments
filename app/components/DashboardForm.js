var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var heroBg = require('../includes/img/hero_beach.jpg');
var DashFormInput = require('./DashFormInput');

var DashboardForm = React.createClass({
  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log("Form submitted");
  },
  render: function() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="dashboardForm" className="half-section">

        <DashFormInput
          actionType={'input'}
          type={'text'}
          name={'address'}
          placeholder={'Adresa stana'}
          className={'dashInput subsection'}
        />

        <div className="dashInputContainer">
          <DashFormInput
            actionType={'input'}
            type={'text'}
            name={'price'}
            placeholder={'Cijena'}
            className={'dashInput subsection smallInput'}
          />
          <DashFormInput
            actionType={'input'}
            type={'text'}
            name={'size'}
            placeholder={'Kvadratura'}
            className={'dashInput subsection smallInput'}
          />
        </div>

        <div className="dashInputContainer">
          <DashFormInput
            actionType={'input'}
            type={'text'}
            name={'people'}
            placeholder={'Broj osoba'}
            className={'dashInput subsection smallInput'}
          />
          <DashFormInput
            actionType={'input'}
            type={'text'}
            name={'rooms'}
            placeholder={'Broj spavaćih soba'}
            className={'dashInput subsection smallInput'}
          />
        </div>

        <DashFormInput
          actionType={'input'}
          type={'text'}
          name={'img'}
          placeholder={'Istaknuta slika'}
          className={'dashInput subsection'}
        />

        <DashFormInput
          actionType={'textarea'}
          type={'text'}
          name={'optionalDescription'}
          placeholder={'Opis po želji'}
          className={'dashInput subsection'}
        />

        <button
          id="dashSubmit">
          Spremi / Objavi</button>
      </form>
    )
  }
});

module.exports = DashboardForm;
