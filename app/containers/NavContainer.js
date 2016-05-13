// Parent of Navigation

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navigation = require('../components/Navigation');

var NavContainer = React.createClass({
  render: function() {
    return (
      <Navigation />
    )
  }
});

module.exports = NavContainer;
