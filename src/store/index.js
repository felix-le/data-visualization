import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers
import eventReducers from './reducers/event.reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const allReducers = {
  event: eventReducers,
};

const rootReducer = combineReducers({
  ...allReducers,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);
export { store, persistor };
