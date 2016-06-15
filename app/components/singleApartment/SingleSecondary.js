import React, { PropTypes } from 'react'

const SingleSecondary = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <section id="singleSecondary">
        {/*
          Internet, Klima, Grijanje, Galerija s Tekstom
        */}
        <div className="container">
          <div className="section-content secondaryInfo">
            <h3 className="third-section subsection">
              <i className="flaticon-wifi"></i>
              Internet
            </h3>
            <h3 className="third-section subsection">
              <i className="flaticon-transport"></i>
              Blizina Autobusa
            </h3>
            <h3 className="third-section subsection">
              <i className="flaticon-stairs"></i>
              3. Kat
            </h3>
          </div>
          <div className="section-content singleGallery">
            {apartment.gallery.map((item, i) =>
              (<figure className="singleImg third-section subsection">
                <img src={item.img} key={i} />
                <figcaption>{item.caption}</figcaption>
              </figure>)
            )}
          </div>
        </div>
      </section>
    )
  }
})

export default SingleSecondary;
