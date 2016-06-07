var React = require('react');
var ReactDOM = require('react-dom');
<<<<<<< HEAD:app/index.js
var routes = require('./config/routes');

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);
var stylesheet = require('./includes/scss/base.scss');


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);

// {this.props.children} is anything contained inside of {this.props.children}'s parent components
// <Link> bla bla </Link> => "bla bla" is the content of {this.props.children}
// {this.props.children} is used when defining the child component
=======
var Landing = require('./pages/Landing');
var Stylesheet = require('./../css/base.scss');
>>>>>>> parent of 58c1d10... Minor Work Done:src/js/app.js
