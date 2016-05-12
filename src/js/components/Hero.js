var React = require('react');
var ReactDOM = require('react-dom');

var Hero = React.createClass({
  render: function() {
    // Welcome msg
    var heroWelcome = 'RENTR'
    // Email input
    return (
      <div id="heroLanding">
        <h1 id="heroWelcome">{heroWelcome}</h1>
        <input id="heroInput" type="email" placeholder="email"/>
        <button id="heroCTA">Potvrdi</button>
      </div>
    )
    // CTA Btn

  }
});

module.exports = Hero;

ReactDOM.render(<Hero />, document.getElementById('app'));
