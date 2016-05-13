// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Navigation() {
  return (
    <nav id="mainNavigation">
      <Link to='/'>Naslovna</Link>
      <Link to='/filter'>Filter</Link>
      <Link to='/registration'>Registracija</Link>
    </nav>
  )
};

module.exports = Navigation;
