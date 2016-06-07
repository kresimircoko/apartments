var React = require('react');
import {reduxForm} from 'redux-form';
import {PropTypes} from 'react';
export const fields = ['email', 'password']

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Obvezno polje'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Pogrešan email'
  }
  if (!values.password) {
    errors.password = 'Obvezno polje'
  }
  return errors
}

var LoginForm = React.createClass({
  onSubmit(props) {
    console.log({props});
  },

  render: function() {
    const {
      fields: { email, password },
      handleSubmit,
      submitting
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit(props => this.onSubmit(props))}
        id="heroLogin" className="half-section">

        <input
          {...email}
          className="subsection full-section" type="email" placeholder="email"
        />
      {email.touched && email.error && <span className="loginError">{email.error}</span>}

        <input
          {...password}
          className="subsection full-section" type="password" placeholder="password"
        />
      {password.touched && password.error && <span className="loginError">{password.error}</span>}

        <button
          disabled={submitting}
          className="half-section" type="submit">
          {submitting ? 'hue' : ''} Submit
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

module.exports = LoginForm;
