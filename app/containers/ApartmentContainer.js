// Parent of Apartment

import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Apartment from '../components/hero/Apartment';

const ApartmentContainer = React.createClass({
  getInitialState() {
    return {
      selected: {
        // thats it were done boys
      }
    }
  },
  handleFilter(value) {
    this.setState({
      selected: value
    });
    console.log(value);
  },
  render () {

    return (
      <div id="apartmentContainer" className="full-container">
        <div className="container">
          {this.props.apartments.map(
            function(apartment, i) {
              if(this.state.selected.kvartFilter && this.state.selected.kvartFilter.length > 0) {
                if(this.state.selected.kvartFilter.indexOf(apartment.neighborhood) === -1) {
                  return;
                }
              }
              if(this.state.selected.osobeFilter && this.state.selected.osobeFilter.length > 0) {
                if(this.state.selected.osobeFilter.indexOf(apartment.people) === -1) {
                  return;
                }
              }
              return <Apartment key={i} i={i} apartment={apartment} />
            }.bind(this)
          )}
        </div>
      </div>
    )
  }
});

export default ApartmentContainer;
