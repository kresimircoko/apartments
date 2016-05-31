// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Navigation() {
  return (
    <nav id="mainNavigation" className="full-container">
      <div className="container">
        <Link to='/'><i className="flaticon-house"></i></Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/registration'>Register</Link>
        <Link to='/apartment'>Apartment</Link>
      </div>
    </nav>
  )
};

module.exports = Navigation;
