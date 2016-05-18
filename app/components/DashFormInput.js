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
      className: ''
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    if(this.props.actionType=="input") {
      return (
        <input
          type={this.props.type}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          name={this.props.name}
          className={this.props.className}
        />
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
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string
}

module.exports = DashFormInput;
