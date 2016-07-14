import React from 'react';
import { ReactRouter, Link } from 'react-router';

var Filter = React.createClass({
  getInitialState() {
    return {
      selected: []
    };
  },
  getDefaultProps() {
    return {
      filterList: [],
      name: '',
      id: '',
      props: []
    };
  },
  render() {
    var selected = [];

    var handleClick = function(i, filterList) {
      console.log('You clicked: ' + filterList[i]);
      this.setState({clicked: i});

      var index = this.state.selected.indexOf(i);
      if (index === -1) {
        this.state.selected.push(i);
      } else {
        this.state.selected.splice(index, 1);
      }
    }

    var className = this.state.clicked ? 'selected' : '';

    return (
      <div id={this.props.id} className="filterCloud quarter-section">
        <h3>{this.props.name}</h3>
        <ul>
          {this.props.filterList.map(function(listValue, i) {
            return <li className={this.state.selected.indexOf(i) > -1 ? 'selected' : ''} onClick={handleClick.bind(this, i, this.props.filterList)} key={i}>{listValue}</li>;
          }, this)} {/* this at the end to fix the scope issue from global to local */}
        </ul>
      </div>
    )
  }
});

export default Filter;

{/*
  indexOf checks what position the element is in the array
  if not found -> returns -1, and add to array
  if found -> remove from array
  this.state.selected.indexOf(i) > -1 ? 'selected' : '' -> if in an array give it clicked, otherwise empty string

*/}
