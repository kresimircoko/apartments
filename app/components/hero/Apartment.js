// Child of ApartmentContainer

import React from 'react';
import { Link } from 'react-router';

var Apartment = React.createClass({
  render () {
    const { apartment, i } = this.props;
    return (
      <div className="apartment third-section subsection">
        <img src={apartment.img} alt={apartment.address} className="apartmentImg" />

        <section className="apartmentInfo">
          <span>
            <i className="fa fa-money"></i> {apartment.price}
          </span>
          <span>
            <i className="fa fa-group"></i> {apartment.people}
          </span>
          <span>
            <i className="fa fa-expand"></i> {apartment.scale}m&sup2;
            </span>
          <span>
            <i className="fa fa-map-marker"></i> {apartment.neighborhood}
          </span>
        </section>
        <Link to={`/apartment/${apartment.route}`} className="apartmentDetailsBtn"> 
          Detalji <i className="fa fa-chevron-right"></i>
        </Link>
      </div>
    )
  }
});

export default Apartment;
