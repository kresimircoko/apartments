import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Hero from '../components/hero/Hero';

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
