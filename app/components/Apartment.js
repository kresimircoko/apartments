// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Apartment() {
  return (
    <div className = "apartment">
      <img src="https://placehold.it/200x200" alt="#"/>
      <span>Lokacija</span>
      <span>Kvadratura</span>
      <span>Cijena</span>
      <span>Broj Osoba</span>
      <button type="button">Detalji</button>
    </div>
  )
};

module.exports = Apartment;
