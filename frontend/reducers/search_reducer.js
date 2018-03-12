import { RECEIVE_SUBREDDITS, REMOVE_SUBREDDIT } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SUBREDDITS:
      return action.subreddits;
    case REMOVE_SUBREDDIT:
      const newState = state.filter(subreddit =>
        subreddit !== action.subreddit
      );
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
