import { RECEIVE_POSTS, DELETE_POSTS } from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      let newState = Object.assign({}, state);
      newState[action.subreddit] = action.posts;
      return newState;
    case DELETE_POSTS:
      newState = Object.assign({}, state);
      delete newState[action.subreddit];
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
