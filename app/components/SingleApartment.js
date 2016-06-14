import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SingleApartment = React.createClass({
  render () {
    return (
      <div id="saContainer" className="full-container">
        <div id="saFeaturedImg"></div>

        <section id="saFeaturedInfo" className="section-content">
          <div className="container">
            <div className="quarter-section subsection">
              <i className="flaticon-money"></i>
              <h3>678.00 kn</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="flaticon-people"></i>
              <h3>2 Osobe</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="flaticon-home-1"></i>
              <h3>1 Spavaća Soba</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="flaticon-home"></i>
              <h3>63 m<sup>2</sup></h3>
            </div>
          </div>
        </section>

        <section id="saContactInfo" className="section-content">
          <div className="container">
            <div className="half-section subsection">
              <h3>
                <i className="flaticon-phone-call"></i>
                091/187-3710
              </h3>
            </div>
            <div className="half-section subsection">
              <h3>
                <i className="flaticon-envelope"></i>
                kresimircoko@gmail.com
              </h3>
            </div>
          </div>
        </section>

        <section id="saDescription" className="section-content">
          <div className="container">
            <h2 className="section-heading">Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>

        <section id="saSecondaryInfo" className="section-content">
          <div className="container">
            <h2 className="section-heading">Secondary Info</h2>
            <ul className="half-section subsection">
              <li><i className="flaticon-wifi"></i><h3> Internet  </h3></li>
              <li><i className="flaticon-stairs"></i><h3> 3. kat  </h3></li>
              <li><h3>Balkon </h3></li>
              <li><h3>Grijanje </h3></li>
            </ul>
            <ul className="half-section subsection">
              <li><i className="flaticon-transport"></i><h3> 5 min  </h3></li>
              <li><i className="flaticon-city"></i><h3> Zgrada  </h3></li>
              <li><h3>Klima </h3></li>
              <li><h3>MaxTV (ili slično) </h3></li>
            </ul>
          </div>
        </section>

        <section id="saCarousel" className="section-content">
          <div className="container">
            <img src="./includes/img/single-apartment.jpg" alt="apartmentCarouselImg" className="saCarouselImg"/>
          </div>
        </section>

        <section id="saTertiaryInfo" className="section-content">
          <div className="container">
            <h2 className="section-heading">Tertiary Info</h2>
            <ul className="quarter-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
            <ul className="quarter-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
            <ul className="quarter-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
            <ul className="quarter-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
          </div>
        </section>

        {/*
        Remaining Features */}
      </div>
    )
  }
})

export default SingleApartment;
