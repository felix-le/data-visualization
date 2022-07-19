import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers
import eventReducers from './reducers/event.reducers';

const allReducers = {
  event: eventReducers,
};

const reducers = combineReducers({
  ...allReducers,
});

const stores = createStore(reducers, composeWithDevTools());

export default stores;
