import React from 'react';
import { ReactRouter, Link } from 'react-router';

{/*
  Needs to accept a callback when the configuration is updated
  The configuration is then passed to both FilterContainer and ApartmentContainer for removing the apartments that dont match the filter
*/}

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
      props: [],
      value: ''
    };
  },
  render() {
    var selected = [];

    var handleClick = function(i, filterList) {
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
            return <li
              className={this.state.selected.indexOf(i) > -1 ? 'selected' : ''}
              onClick={handleClick.bind(this, i, this.props.filterList)}
              key={i}>
              {listValue}
            </li>;
          }, this)}
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
