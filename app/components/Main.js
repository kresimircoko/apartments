var React = require('react');
var NavContainer = require('../containers/NavContainer');
var ApartmentContainer = require('../containers/ApartmentContainer');
var FilterContainer = require('../containers/FilterContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div id='appContainer' className="full-container">
        <NavContainer />
        {this.props.children}
        <FilterContainer />
        <ApartmentContainer />
      </div>
    )
  }
});

module.exports = Main;
