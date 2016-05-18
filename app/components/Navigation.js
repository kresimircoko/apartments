// Child of NavContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Navigation() {
  return (
    <nav id="mainNavigation" className="full-container">
      <div className="container">
        <Link to='/'><i className="fa fa-home"></i></Link>
        <Link to='/register'>Register</Link>
      </div>
    </nav>
  )
};

module.exports = Navigation;
