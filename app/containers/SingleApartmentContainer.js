import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SingleApartment from '../components/singleApartment/SingleApartment';

const SingleApartmentContainer = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <SingleApartment i={i} apartment={apartment} {...this.props}/>
    )
  }
})

export default SingleApartmentContainer;
