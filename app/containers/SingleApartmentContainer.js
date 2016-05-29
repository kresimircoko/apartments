var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Apartment = require('../components/Apartment');
var apBG = require('../includes/img/single-apartment.jpg');

var ApartmentContainer = React.createClass({
  render() {
    return (
      <div id="saContainer" className="full-container">
        <div id="saFeaturedImg"></div>

      <i className="flaticon-arrows"></i>

        <section id="saFeaturedInfo" className="section-content">
          <div className="container">
            <div className="quarter-section subsection">
              <i className="fa fa-money"></i>
              <h3>Cijena</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="fa fa-group"></i>
              <h3>Osoba</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="fa fa-bed"></i>
              <h3>Spavaćih Soba</h3>
            </div>
            <div className="quarter-section subsection">
              <i className="fa fa-expand"></i>
              <h3>Kvadratura</h3>
            </div>
          </div>
        </section>

        <section id="saContactInfo" className="section-content">
          <div className="container">
            <div className="half-section subsection">
              <h3>
                <i className="fa fa-phone"></i>
                091/187-3710
              </h3>
            </div>
            <div className="half-section subsection">
              <h3>
                <i className="fa fa-envelope"></i>
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
            <ul className="third-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
            <ul className="third-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
            </ul>
            <ul className="third-section subsection">
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
              <li>Placeholder</li>
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
});

module.exports = ApartmentContainer;
