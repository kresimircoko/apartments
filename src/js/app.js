var React = require('react');
var ReactDOM = require('react-dom');
var Landing = require('./pages/Landing');
var Layout = require('./pages/Layout');
var routes = require('../config/routes');
var Stylesheet = require('./../css/base.scss');

// {this.props.children} is anything contained inside of {this.props.children}'s parent components
// <Link> bla bla </Link> => "bla bla" is the content of {this.props.children}
// {this.props.children} is used when defining the child component
