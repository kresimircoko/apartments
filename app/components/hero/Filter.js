import React from 'react';
import { ReactRouter, Link } from 'react-router';

var Filter = React.createClass({
  getDefaultProps: function() {
    return {
      filterList: [],
      name: ''
    };
  },
  render () {
    return (
      <div className="filterCloud quarter-section">
        <h3>{this.props.name}</h3>
        <ul>
          {this.props.filterList.map(function(listValue) {
            return <li>{listValue}</li>;
            })}
          </ul>
      </div>
    )
  }
});

export default Filter;