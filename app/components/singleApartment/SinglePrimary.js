import React, { PropTypes } from 'react'

const SinglePrimary = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <section id="singlePrimary">
        <div className="container">
          <div className="third-section subsection primaryInfo">
            <i className="flaticon-signs"></i>
            <span> {apartment.address} </span>
          </div>
          <div className="half-section subsection primaryInfo">
            <div>
              <i className="flaticon-home"></i>
              <span> {apartment.scale} m<sup>2</sup> </span>
            </div>
            <div>
              <i className="flaticon-home-1"></i>
              <span> {apartment.bedrooms} Spavaće sobe</span>
            </div>
          </div>
          <div className="tiny-section subsection primaryInfo">
            <i className="flaticon-city"></i>
            <span> {apartment.typeof} </span>
          </div>
        </div>
      </section>
    )
  }
})

export default SinglePrimary;
