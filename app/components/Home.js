import React from 'react';
import { ReactRouter, Link } from 'react-router';
import HeroContainer from '../containers/HeroContainer';
import FilterContainer from '../containers/FilterContainer';
import ApartmentContainer from '../containers/ApartmentContainer';

var Home = React.createClass({
  render () {
    return (
      <div>
        <HeroContainer />
        <FilterContainer />
        <ApartmentContainer {...this.props} />
      </div>
    )
  }
});

export default Home;
