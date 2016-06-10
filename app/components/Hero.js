import React from 'react';
import LoginForm from './LoginForm';
import heroBg from '../includes/img/hero_beach.jpg';

function Hero() {
  return (
    <div id="heroContent" className="container">
      <h1 id="heroHeading">RENTR</h1>
      <p id="heroDescription">Najbolje mjesto za pretragu stanova</p>
      <LoginForm />
    </div>
  )
};

export default Hero;
