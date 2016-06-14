import React from 'react';
import { ReactRouter, Link } from 'react-router';
import heroBg from '../includes/img/hero_beach.jpg';
import DashFormInput from './DashFormInput';

var DashboardForm = React.createClass({
  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log("Form submitted");
  },
  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="dashboardForm" className="half-section">

        <DashFormInput
          actionType={'input'}
          type={'text'}
          name={'name'}
          placeholder={'Naziv stana'}
          className={'dashInput subsection'}
        />

        <DashFormInput
          actionType={'input'}
          type={'text'}
          name={'phone'}
          placeholder={'Telefonski broj'}
          className={'dashInput subsection'}
        />

        <DashFormInput
          actionType={'input'}
          type={'email'}
          name={'email'}
          placeholder={'Kontakt email'}
          className={'dashInput subsection'}
        />

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

        <div className="dashInputContainer">
          <h3 className="subsection-heading half-section">Internet</h3>
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'internet'}
            id={'internet-1'}
            value={'Da'}
            className={'dashInput'}
          />
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'internet'}
            id={'internet-2'}
            value={'Ne'}
            className={'dashInput'}
          />
        </div>

        <div className="dashInputContainer">
          <h3 className="subsection-heading half-section">Klima</h3>
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'klima'}
            id={'klima-1'}
            value={'Da'}
            className={'dashInput'}
          />
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'klima'}
            id={'klima-2'}
            value={'Ne'}
            className={'dashInput'}
          />
        </div>

        <div className="dashInputContainer">
          <h3 className="subsection-heading half-section">Grijanje</h3>
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'grijanje'}
            id={'grijanje-1'}
            value={'Da'}
            className={'dashInput'}
          />
          <DashFormInput
            actionType={'input'}
            type={'radio'}
            name={'grijanje'}
            id={'grijanje-2'}
            value={'Ne'}
            className={'dashInput'}
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

export default DashboardForm;
