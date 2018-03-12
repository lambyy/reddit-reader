import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  posts: PostReducer,
  search_results: SearchReducer
});

export default RootReducer;
