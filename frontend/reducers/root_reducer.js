import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import SubredditReducer from './search_reducer';

const RootReducer = combineReducers({
  posts: PostReducer,
  search_results: SubredditReducer
});

export default RootReducer;
