var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HeroContainer = require('../containers/HeroContainer');
var FilterContainer = require('../containers/FilterContainer');
var ApartmentContainer = require('../containers/ApartmentContainer');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <HeroContainer />
        <FilterContainer />
        <ApartmentContainer />
      </div>
    )
  }
});

module.exports = Home;
