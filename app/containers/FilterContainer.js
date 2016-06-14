import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Filter from '../components/Filter';

const FilterContainer = React.createClass({
  render () {
    return (
      <section id="filterContainer" className="container">
        <h2 id="filterHeading" className="full-section">FILTRIRAJ</h2>
        <Filter
          name={'Kvart'}
          filterList={[
            'Šubićevac', 'Meterize', 'Baldekin', 'Vidici', 'Rokići', 'Grad'
        ]} />
        <Filter
          name={'Cijena'}
          filterList={[
            '< 600kn', '600kn - 700kn', '700kn - 800kn', '800kn - 900kn', '> 900kn'
        ]} />
        <Filter
          name={'Broj osoba'}
          filterList={[
            '1', '2', '3', '4', '5', '6'
        ]} />
        <Filter
          name={'Kvadratura'}
          filterList={[
            '< 40m', '40m - 50m', '50m - 60m', '60m - 70m', '70m - 80m', '> 80m'
        ]} />
      </section>
    )
  }
});

export default FilterContainer;
