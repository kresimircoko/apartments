var React = require('react');
var NavContainer = require('../containers/NavContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div id='appContainer'>
        <NavContainer />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
