// Child of NavContainer

import React from 'react';
import ReactRouter, { Link } from 'react-router';

function Navigation() {
  return (
    <nav id="mainNavigation" className="full-container">
      <div className="container">
        <Link to='/'><i className="flaticon-house"></i></Link>
        <Link to='dashboard'>Dashboard</Link>
        <Link to='registration'>Register</Link>
      </div>
    </nav>
  )
};

export default Navigation;
