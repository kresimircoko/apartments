var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Register = require('../components/Register')

var RegisterContainer = React.createClass({
  render: function() {
    return (
      <div id="registerContainer" class="full-container">
        <Register />
      </div>
    )
  }
});

module.exports = RegisterContainer;
