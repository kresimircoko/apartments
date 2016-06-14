// Parent of Navigation

import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Navigation from '../components/Navigation';

var NavContainer = React.createClass({
  render () {
    return (
      <Navigation />
    )
  }
});

export default NavContainer;
