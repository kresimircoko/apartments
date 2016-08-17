import React from 'react';
import { ReactRouter, Link } from 'react-router';
import HeroContainer from '../containers/HeroContainer';
import FilterContainer from '../containers/FilterContainer';
import ApartmentContainer from '../containers/ApartmentContainer';
// import FilteredApartmentsContainer from '../containers/FilteredApartmentsContainer';


{/* Needs to be part of the state of FilterContainer and ApartmentContainer */}

var FilteredApartmentsContainer = React.createClass({
  handleFilterUpdate(filterValue) {
    this.setState({
      clicked: true
    });
  },
  changeHandler: function(value) {
    this.refs.ApartmentContainerRef.handleFilter(value);
  },
  render () {
    return (
      <div>
        <FilterContainer onChange={this.changeHandler} />
        <ApartmentContainer ref="ApartmentContainerRef" {...this.props} />
      </div>
    );
  }
});

var Home = React.createClass({
  render () {
    return (
      <div>
        <HeroContainer />
        <FilteredApartmentsContainer {...this.props} />
      </div>
    )
  }
});

export default Home;
