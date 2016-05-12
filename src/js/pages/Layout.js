var React = require('react');
var ReactDOM = require('react-dom');
var Nav = require('../components/Nav');
var Hero = require('../components/Hero');

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        Layout
        <Nav />
        <Hero />
      </div>
      // <ApartmentListing />
      // <Footer/CTA />
    )
  }
});

module.exports = Layout;

ReactDOM.render(<Layout />, document.getElementById('app'));
