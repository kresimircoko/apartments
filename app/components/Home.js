var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>RENTR</h1>
        <p>Najbolje mjesto za pretragu stanova</p>
        <Link to='/playerOne'>
          <button type='button'>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
