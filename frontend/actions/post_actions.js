import RedditAPI from '../util/reddit_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";

const receivePosts = (posts, subreddit) => ({
  type: RECEIVE_POSTS,
  posts,
  subreddit
});

export const deletePosts = (subreddit) => ({
  type: DELETE_POSTS,
  subreddit
});

export const requestPosts = (subreddit) => dispatch => (
  RedditAPI.getPosts(subreddit)
    .then(posts => dispatch(receivePosts(posts.data.children, subreddit)))
);
