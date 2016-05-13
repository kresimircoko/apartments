var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Battle</h1>
        <p>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button'>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
