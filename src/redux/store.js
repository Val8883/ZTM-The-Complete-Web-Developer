import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
