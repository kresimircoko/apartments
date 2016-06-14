import React from 'react';
import { ReactRouter, Link } from 'react-router';
import NavContainer from '../containers/NavContainer';

var Main = React.createClass({
  render () {
    return (
      <div id='appContainer' className="full-container">
        <NavContainer />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
