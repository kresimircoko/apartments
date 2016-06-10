import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Importing reducers
import apartments from './apartments';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({form: formReducer, apartments, routing: routerReducer});

export default rootReducer;
