// Parent of Apartment

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Apartment = require('../components/Apartment');

var ApartmentContainer = React.createClass({
  render: function() {
    return (
      <div id="apartmentContainer" className="container">
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
      </div>
    )
  }
});

module.exports = ApartmentContainer;
