import { bindActionCreators } from 'redux';
import { ReactRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// Data
function mapStateToProps(state) {
  return {
    apartments: state.apartments
  }
}

// Actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
