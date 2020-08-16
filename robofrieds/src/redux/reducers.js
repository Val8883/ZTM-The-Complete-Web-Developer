import * as constants from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    default:
      return state;
  }
};
