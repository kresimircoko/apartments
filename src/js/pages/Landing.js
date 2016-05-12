var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('../components/Nav');
var Hero = require('../components/Hero');

var Landing = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Hero />
      </div>
      // <ApartmentListing />
      // <Footer/CTA />
    )
  }
});

module.exports = Landing;

ReactDOM.render(<Landing />, document.getElementById('app'));
