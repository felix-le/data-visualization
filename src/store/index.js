import { createStore, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
// import reducers
import eventReducers from './reducers/event.reducers';

const allReducers = {
  eventReducers,
};

const reducers = combineReducers({
  ...allReducers,
});

const stores = createStore(reducers, composeWithDevTools());

export default stores;
