var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Hero = require('./Hero');

var Home = React.createClass({
  render: function() {
    return (
      <Hero />
    )
  }
});

module.exports = Home;
