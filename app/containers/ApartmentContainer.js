// Parent of Apartment

import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Apartment from '../components/hero/Apartment';

const ApartmentContainer = React.createClass({
  render () {
    return (
      <div id="apartmentContainer" className="full-container">
        <div className="container">
          {this.props.apartments.map(
            (apartment, i) => <Apartment {...this.props} key={i} i={i} apartment={apartment} />
          )}
        </div>
      </div>
    )
  }
});

export default ApartmentContainer;
