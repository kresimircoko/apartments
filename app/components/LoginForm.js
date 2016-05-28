var React = require('react');
import {reduxForm} from 'redux-form';
import {PropTypes} from 'react';

var LoginForm = React.createClass({
  onSubmit(props) {
    alert('Post Submitted');
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
          className="subsection full-section" type="email" placeholder="email" />

        <input
          {...password}
          className="subsection full-section" type="password" placeholder="password" />

        <button
          disabled={submitting}
          className="half-section" type="submit">
          {submitting ? 'hue' : '#'} Submit
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
  fields: ['email', 'password']
})(LoginForm);

module.exports = LoginForm;
