import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Register from '../components/Register';

var RegisterContainer = React.createClass({
  render() {
    return (
      <div id="registerContainer" class="full-container">
        <Register />
      </div>
    )
  }
});

export default RegisterContainer;
