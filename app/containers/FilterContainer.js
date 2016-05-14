
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Filter = require('../components/Filter');

var FilterContainer = React.createClass({
  render: function() {
    return (
      <section id="filterContainer" className="container">
        <Filter />
        <Filter />
        <Filter />
        <Filter />
      </section>
    )
  }
});

module.exports = FilterContainer;
