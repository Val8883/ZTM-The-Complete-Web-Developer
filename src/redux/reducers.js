import * as constants from './constants';

const initialStateSearch = {
  searchField: '',
  robots: [],
};

export const searchRobots = (state = initialStateSearch, { type, payload }) => {
  switch (type) {
    case constants.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: '',
};

export const requestRobots = (
  state = initialStateRobots,
  { type, payload }
) => {
  switch (type) {
    case constants.REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case constants.REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, isPending: false };
    case constants.REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};
