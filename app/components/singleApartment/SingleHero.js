import React, { PropTypes } from 'react'

const SingleHero = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <section id="singleHero">
        <img src={apartment.img} alt={apartment.address}/>
        <div className="container">
          <span className="apartmentHeroInfo"> {apartment.price} </span>
          <span className="apartmentHeroInfo"> {apartment.people} osobe </span>
        </div>
      </section>
    )
  }
})

export default SingleHero;
