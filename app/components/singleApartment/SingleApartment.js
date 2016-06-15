import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SingleHero from './SingleHero';
import SinglePrimary from './SinglePrimary';
import SingleContact from './SingleContact';
import SingleDescription from './SingleDescription';
import SingleSecondary from './SingleSecondary';

const SingleApartment = React.createClass ({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <div id="singleApartmentContainer">
        <SingleHero i={i} apartment={apartment} {...this.props} />

        {/* Important Info about the apartment */}
        <SinglePrimary i={i} apartment={apartment} {...this.props} />

        {/* Contact Info */}
        <SingleContact i={i} apartment={apartment} {...this.props} />

        {/* Description set by the poster */}
        <SingleDescription i={i} apartment={apartment} {...this.props} />

        {/* Secondary Detailed Info about the apartment */}
        <SingleSecondary i={i} apartment={apartment} {...this.props} />
      </div>
    )
  }
})

export default SingleApartment;
