var React = require('react');
var LoginForm = require('./LoginForm');
var heroBg = require('../includes/img/hero_beach.jpg');

function Hero() {
  return (
    <div id="heroContent" className="container">
      <h1 id="heroHeading">RENTR</h1>
      <p id="heroDescription">Najbolje mjesto za pretragu stanova</p>
      <LoginForm />
    </div>
  )
};

module.exports = Hero;
