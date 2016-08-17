import React from 'react';
import { ReactRouter, Link } from 'react-router';
import Filter from '../components/hero/Filter';

const FilterContainer = React.createClass({
  getInitialState() {
    return {
      selected: {
        kvartFilter : [],
        cijenaFilter : [],
        osobeFilter : [],
        kvadraturaFilter : []
      } /* Holds the filters the user clicked, needs to get updated every time a filter is interacted with */
    };
  },
  handleClick(i, key) {
    var index = this.state.selected[key].indexOf(i);
    if (index === -1) {
      this.state.selected[key].push(i);
    } else {
      this.state.selected[key].splice(index, 1);
    }
    this.props.onChange(this.state.selected);
    this.refs[key].setState({selected: this.state.selected[key]});
  },
  render () {
    var filters = []; {/* Doesnt filter any apartments to display them on initial load */}
    return (
      <section id="filterContainer" className="container">
        <Filter
          onClick={this.handleClick}
          id="kvartFilter"
          ref="kvartFilter"
          name={'Kvart'}
          filterList={[
            'Šubićevac', 'Meterize', 'Baldekin', 'Vidici', 'Rokići', 'Grad'
        ]} />
        <Filter
          onClick={this.handleClick}
          id="cijenaFilter"
          ref="cijenaFilter"
          name={'Cijena'}
          filterList={[
            '< 600kn', '600kn - 700kn', '700kn - 800kn', '800kn - 900kn', '> 900kn'
        ]} />
        <Filter
          onClick={this.handleClick}
          id="osobeFilter"
          ref="osobeFilter"
          name={'Broj osoba'}
          filterList={[
            1, 2, 3, 4, 5, 6
        ]} />
        <Filter
          onClick={this.handleClick}
          id="kvadraturaFilter"
          ref="kvadraturaFilter"
          name={'Kvadratura'}
          filterList={[
            '40m - 60m', '60m - 70m', '70m - 80m', '> 80m'
        ]} />
      </section>
    )
  }
});

export default FilterContainer;
