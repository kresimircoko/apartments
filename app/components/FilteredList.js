import React from 'react';
import ReactRouter, { Link } from 'react-router';

const FilteredList = React.createClass({
  render() {
    var content;

    if (this.props.items.length > 0) {
      var items = this.props.items.map(function(item) {
        return <li>{item}</li>;
      });
      content = <ul>{items}</ul>
    } else {
      content = <p>No items matching this filter</p>;
    }
    return (
      <div className="results">
        <h3>Results</h3>
        {content}
      </div>
    )
  }
})

export default FilteredList;
