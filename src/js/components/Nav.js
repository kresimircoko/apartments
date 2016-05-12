var React = require('react');
var ReactDOM = require('react-dom');

// Parent
var Nav = React.createClass({
  render: function() {
    var navItems = ['Home', 'Information', 'Register']

    return  (
      <NavItems items={navItems} />
    )
  }
});

// Child
var NavItems = React.createClass({
  render: function() {
    var navListItems = this.props.items.map(function(item) {
      return <a> {item} </a>;
    });

    return (
      <nav id="mainNav">
        {navListItems}
      </nav>
    )
  }
});

module.exports = Nav;

ReactDOM.render(<Nav />, document.getElementById('app'));
