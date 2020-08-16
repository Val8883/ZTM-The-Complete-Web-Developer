import { createStore } from 'redux';
import { searchRobots } from './reducers';

export const store = createStore(searchRobots);
