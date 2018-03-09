import RedditAPI from '../util/reddit_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const requestPosts = () => dispatch => (
  RedditAPI.getPosts()
    .then(posts => dispatch(receivePosts(posts.data.children)))
);
