import React from 'react';
import ReactRouter from 'react-router';
import HeroContainer from '../containers/HeroContainer';
import FilterContainer from '../containers/FilterContainer';
import ApartmentContainer from '../containers/ApartmentContainer';

var Home = React.createClass({
  render () {
    return (
      <div>
        <HeroContainer />
        <FilterContainer />
        <ApartmentContainer />
      </div>
    )
  }
});

export default Home;
