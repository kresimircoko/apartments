// Parent of Apartment

import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Apartment from '../components/Apartment';
import Test from '../components/Test';

const ApartmentContainer = React.createClass({
  render () {

    return (
      <div id="apartmentContainer" className="full-container">

        <div className="test">
          {this.props.apartments.map(
            (apartment, i) => <Test {...this.props} key={i} i={i} apartment={apartment} />
          )}
        </div>

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

export default ApartmentContainer;
