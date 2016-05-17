// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var heroBg = require('../includes/img/hero_beach.jpg');

function DashboardOverview() {
  return (
    <div id="dashboardOverview" className="half-section">
      <h3 id="overviewSelectorHeading" className="subsection">Vrste pogleda</h3>
      <div id="overviewSelector" className="subsection">
        <button className="third-section">Kompaktni</button>
        <button className="third-section isActive">Opušteni</button>
      </div>

      <div id="dashOverviewContainer">
        <div className="overviewImg"></div>
        <div className="overviewPrimary">
          <span className="listingPrice">
            <i className="fa fa-money"></i>
            748,00 kn
          </span>
          <span className="listingPeople">
            <i className="fa fa-group"></i>
            3
          </span>
          <span className="listingRooms">
            <i className="fa fa-bed"></i>
            2
          </span>
        </div>
        <div className="overviewSecondary">
          <span className="listingPrice">
            <i className="fa fa-map-marker"></i>
            bana Ivana Mažuranića 14
          </span>
          <span className="listingPeople">
            <i className="fa fa-expand"></i>
            73m<sup>2</sup>
          </span>
          <p className="listingRooms">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
        <div className="overviewTertiary">
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
          <img src="https://placehold.it/200x200" alt=""/>
        </div>
      </div>
    </div>
  )
};

module.exports = DashboardOverview;
