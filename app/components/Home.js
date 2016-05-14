var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HeroContainer = require('../containers/HeroContainer');

var Home = React.createClass({
  render: function() {
    return (
      <HeroContainer />
    )
  }
});

module.exports = Home;
