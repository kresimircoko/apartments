// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Navigation = React.createClass({
  render: function() {
    return (
      <nav>
        <Link to='/'>
          Naslovna
        </Link>
        <Link to='/filter'>
          Filter
        </Link>
        <Link to='/registration'>
          Registracija
        </Link>
      </nav>
    )
  }
});

module.exports = Navigation;
