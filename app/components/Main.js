var React = require('react');
var NavContainer = require('../containers/NavContainer');
var ApartmentContainer = require('../containers/ApartmentContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div id='appContainer'>
        <NavContainer />
        {this.props.children}
        <ApartmentContainer />
      </div>
    )
  }
});

module.exports = Main;
