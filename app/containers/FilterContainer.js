import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Filter from '../components/hero/Filter';
import FilteredList from '../components/FilteredList';

const FilterContainer = React.createClass({
  render () {
    return (
      <section id="filterContainer" className="container">
        <Filter
          id="kvartFilter"
          name={'Kvart'}
          filterList={[
            'Šubićevac', 'Meterize', 'Baldekin', 'Vidici', 'Rokići', 'Grad'
        ]} />
        <Filter
          id="cijenaFilter"
          name={'Cijena'}
          filterList={[
            '< 600kn', '600kn - 700kn', '700kn - 800kn', '800kn - 900kn', '> 900kn'
        ]} />
        <Filter
          id="osobeFilter"
          name={'Broj osoba'}
          filterList={[
            '1', '2', '3', '4', '5', '6'
        ]} />
        <Filter
          id="kvadraturaFilter"
          name={'Kvadratura'}
          filterList={[
            '40m - 60m', '60m - 70m', '70m - 80m', '> 80m'
        ]} />
      </section>
    )
  }
});

export default FilterContainer;
