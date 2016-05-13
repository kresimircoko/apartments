var React = require('react');
var ReactDOM = require('react-dom');
<<<<<<< HEAD:app/index.js
var routes = require('./config/routes');


ReactDOM.render(
  routes,
  document.getElementById('app')
);

// {this.props.children} is anything contained inside of {this.props.children}'s parent components
// <Link> bla bla </Link> => "bla bla" is the content of {this.props.children}
// {this.props.children} is used when defining the child component
=======
var Landing = require('./pages/Landing');
var Stylesheet = require('./../css/base.scss');
>>>>>>> parent of 58c1d10... Minor Work Done:src/js/app.js
