import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

var app = firebase.initializeApp({
 apiKey: "AIzaSyC8AfUZa1eu1xkOWhvigjAFjj_viF0SKyI",
 authDomain: "rentr-82ad0.firebaseapp.com",
 databaseURL: "https://rentr-82ad0.firebaseio.com",
 storageBucket: "rentr-82ad0.appspot.com",
});

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Obvezno polje'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Pogrešan email'
  }
  if (!values.password) {
    errors.password = 'Obavezno polje'
  }
  return errors
}


var LoginForm = React.createClass({
  onSubmit(props) {
    console.log({props});
  },

  render () {
    const {
      fields: { email, password },
      handleSubmit,
      submitting
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit(props => this.onSubmit(props))}
        id="heroLogin" className="half-section">

        <label htmlFor="email">EMAIL</label>
        <input
          {...email}
          className="subsection full-section" name="email" type="email" placeholder="korisnik@email.com"
        />
      {email.touched && email.error && <span className="loginError">{email.error}</span>}

        <label htmlFor="password">PASSWORD</label>
        <input
          {...password}
          className="subsection full-section" name="password" type="password" placeholder="*********"
        />
      {password.touched && password.error && <span className="loginError">{password.error}</span>}

        <button
          disabled={submitting}
          className="half-section" type="submit">
          {submitting ? 'hue' : ''} Login
        </button>
      </form>
    );
  }
});

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate
})(LoginForm);

export default LoginForm;
