import React from 'react';
import NavContainer from '../containers/NavContainer';
import { Link } from 'react-router';

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
