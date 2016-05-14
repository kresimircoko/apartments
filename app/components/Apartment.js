// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Apartment() {
  return (
    <div className="apartment third-section subsection">
      <img className="apartmentImg" src="https://placehold.it/380x200" alt="#"/>
      <section className="apartmentInfo">
        <span>Lokacija</span>
        <span>Kvadratura</span>
        <span>Cijena</span>
        <span>Broj Osoba</span>
      </section>
      <button className="apartmentDetailsBtn" type="button">Detalji</button>
    </div>
  )
};

module.exports = Apartment;
