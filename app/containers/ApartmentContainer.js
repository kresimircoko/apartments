// Parent of Apartment

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Apartment = require('../components/Apartment');

var ApartmentContainer = React.createClass({
  render: function() {
    return (
      <div id="apartmentContainer" className="full-container">
        <div className="container">
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'768.00'}
            neighborhood={'Šubićevac'}
            size={'47'}
            people={'2'}
            route={'#'}
          />
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'1024.00'}
            neighborhood={'Meterize'}
            size={'126'}
            people={'3'}
            route={'#'}
          />
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'512.00'}
            neighborhood={'Vidici'}
            size={'68'}
            people={'3'}
            route={'#'}
          />
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'748.00'}
            neighborhood={'Baldekin'}
            size={'47'}
            people={'2'}
            route={'#'}
          />
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'748.00'}
            neighborhood={'Šubićevac'}
            size={'47'}
            people={'2'}
            route={'#'}
          />
          <Apartment
            img={'http://www.hotel-r.net/im/hotel/am/apartments-21.jpg'}
            price={'748.00'}
            neighborhood={'Šubićevac'}
            size={'47'}
            people={'2'}
            route={'#'}
          />
        </div>
      </div>
    )
  }
});

module.exports = ApartmentContainer;
