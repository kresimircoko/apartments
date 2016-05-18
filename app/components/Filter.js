var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Filter = React.createClass({
  getDefaultProps: function() {
    return {
      filterList: [],
      name: ''
    };
  },
  render: function() {
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

module.exports = Filter;
