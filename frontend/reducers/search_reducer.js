import { RECEIVE_SUBREDDITS } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SUBREDDITS:
      return action.subreddits;
    default:
      return state;
  }
};

export default SearchReducer;
