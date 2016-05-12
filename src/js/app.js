var React = require('react');
var ReactDOM = require('react-dom');
var Stylesheet = require('./../css/base.scss');
var routes = require('../config/routes.js');

// {this.props.children} is anything contained inside of {this.props.children}'s parent components
// <Link> bla bla </Link> => "bla bla" is the content of {this.props.children}
// {this.props.children} is used when defining the child component

ReactDOM.render(routes, document.getElementById('app'));
