import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const rootReducer = combineReducers({
  app: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;