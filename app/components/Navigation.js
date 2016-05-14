// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Navigation() {
  return (
    <nav id="mainNavigation" className="container">
      <Link to='/'><i className="fa fa-home"></i></Link>
      <Link to='/register'>Register</Link>
    </nav>
  )
};

module.exports = Navigation;
