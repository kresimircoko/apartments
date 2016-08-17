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
    }
  },
  getDefaultProps() {
    return {
      name: '',
      id: '',
      props: []
    };
  },
  render() {
    return (
      <div id={this.props.id} className="filterCloud quarter-section">
        <h3>{this.props.name}</h3>
        <ul>
          {this.props.filterList.map(function(listValue, i) {
            var activeClass = '';
            if(this.state.selected.indexOf(listValue) > -1) {
              activeClass = 'selected';
            }
            return <li
              className = {activeClass}
              onClick = {() => {this.props.onClick(listValue, this.props.id)}}
              key={i}> {listValue} </li>;
          }.bind(this))}
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
// var className = this.state.clicked ? 'selected' : '';
