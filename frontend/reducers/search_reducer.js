import { RECEIVE_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_RESULTS:
      return action.subreddits;
    default:
      return state;
  }
};

export default SearchReducer;
