// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var heroBg = require('../includes/img/hero_beach.jpg');

var inputs = document.querySelectorAll( '#dashFile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

function Dashboard() {
  return (
    <div className="container">
      <form id="dashboardForm" className="half-section">
        <input className="dashInput subsection" type="text" placeholder="Adresa stana"/>
        <input className="dashInput subsection" type="text" placeholder="Cijena"/>
        <input className="dashInput subsection" type="text" placeholder="Kvadratura"/>
        <input className="dashInput subsection" type="text" placeholder="Broj kreveta (osoba)"/>
        <input className="dashInput subsection" type="text" placeholder="Broj spavaćih soba"/>
        <input className="dashInput subsection" type="text" placeholder="Istaknuta slika"/>
        <textarea className="dashInput subsection" name="optionalDescription" id="optionalDescription" rows="4" placeholder="Opis po želji"></textarea>
        <button id="dashSubmit" type="submit">Spremi / Objavi</button>
      </form>
      <div id="dashboardOverview" className="half-section">
        <div id="overviewSelector" className="subsection">
          <button className="third-section">Compact</button>
          <button className="third-section isActive">Cozy</button>
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
    </div>
  )
};

module.exports = Dashboard;
