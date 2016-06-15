import React, { PropTypes } from 'react'

const SingleContact = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <section id="singleContact">
        <div className="container">
          {/*
            Image
            Full Name
            Email
            Phone
          */}
          <div id="ownerInfo">
            <img src={apartment.ownerimg} alt={apartment.ownername}></img>
            <h3>{apartment.ownername}</h3>
            <div className="inner-container">
              <h3 className="half-section subsection">
                <i className="flaticon-envelope"></i> {apartment.owneremail}
              </h3>
              <h3 className="half-section subsection">
                <i className="flaticon-phone-call"></i> {apartment.ownerphone}
              </h3>
            </div>
          </div>

        </div>
      </section>
    )
  }
})

export default SingleContact;
