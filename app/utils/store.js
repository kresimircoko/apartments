var store = require('React');

const createStore = (reducer) => {
  let state;

  const getState = () => state;

  const dispatch = (action) => {

  };

  return { getState, dispatch, subscribe };
}

const store = createStore(counter);
