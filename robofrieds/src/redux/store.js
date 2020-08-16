import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const store = createStore(searchRobots, applyMiddleware(logger));
