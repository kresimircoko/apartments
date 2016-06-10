import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/reducer';

// Placeholder data
import apartments from '../data/data';

// Object for the default data
const defaultState = {
  apartments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
