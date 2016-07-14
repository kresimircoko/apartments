import React from 'react';
import { ReactRouter, Link } from 'react-router';
import LoginForm from './LoginForm';
import heroBg from '../../includes/img/hero_beach.jpg';

function Hero() {
  return (
    <section id="heroContainer">
      <div className="container">
        <h1 id="heroHeading">RENTR</h1>
        <p id="heroDescription">Najbolje mjesto za pretragu stanova</p>
        <LoginForm />
      </div>
    </section>
  )
};

export default Hero;
