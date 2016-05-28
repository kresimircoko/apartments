var React = require('react');

var Login = React.createClass({
  
  render: function() {
    return (
      <form role="form" id="heroLogin" className="half-section">
        <input

        className="subsection full-section" type="email" placeholder="email" />
        <input

        className="subsection full-section" type="password" placeholder="password" />
        <button

        className="half-section" type="submit">Login</button>
      </form>
    );
  }
});

module.exports = Login;
