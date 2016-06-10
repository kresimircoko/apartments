import React from 'react';
import ReactRouter from 'react-router';
import Hero from '../components/Hero';

const HeroContainer = React.createClass({
  render () {
    return (
      <section id="heroContainer" className="full-container">
        <Hero />
      </section>
    )
  }
});

export default HeroContainer;
