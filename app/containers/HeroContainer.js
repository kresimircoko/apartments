var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Hero = require('../components/Hero');

var HeroContainer = React.createClass({
  render: function() {
    return (
    <section id="heroContainer" className="full-container">
      <Hero />
    </section>
    )
  }
});

module.exports = HeroContainer;
