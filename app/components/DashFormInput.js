var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

var DashFormInput = React.createClass({
  getInitialState: function() {
    return {
      value: '',
      actionType: '',
      placeholder: '',
      name: '',
      type: '',
      className: '',
      id: ''
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    if(this.props.actionType=="input" && this.props.type!="radio") {
      return (
        <input
          type={this.props.type}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          name={this.props.name}
          className={this.props.className}
          value={this.props.value}
        />
      );
    }
    if(this.props.actionType=="input" && this.props.type=="radio") {
      return (
        <div className="radioInnerContainer quarter-section subsection">
          <input
            type={this.props.type}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            name={this.props.name}
            className={this.props.className}
            value={this.props.value}
            id={this.props.id}
          />
        <label htmlFor={this.props.id}>{this.props.value}</label>
        </div>
      );
    }
    if(this.props.actionType=="textarea") {
      return (
        <textarea rows="4"
          type={this.props.type}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          name={this.props.name}
          className={this.props.className}
        ></textarea>
      );
    } else {
        return <div> No input type defined </div>;
    }
  }
});

DashFormInput.propTypes = {
  actionType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string
}

module.exports = DashFormInput;
