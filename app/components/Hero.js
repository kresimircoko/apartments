var React = require('react');
var heroBg = require('../includes/img/hero_beach.jpg');

function Hero() {
  return (
    <div id="heroContent" className="container">
      <h1 id="heroHeading">RENTR</h1>
      <p id="heroDescription">Najbolje mjesto za pretragu stanova</p>
      <input
        className="third-section"
        id="heroInput"
        type="email"
        placeholder="email" />
      <button
        className="quarter-section"
        id="heroBtn"> Registriraj me </button>
    </div>
  )
};

module.exports = Hero;
