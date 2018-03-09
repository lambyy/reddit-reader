import { getPosts } from '../util/reddit_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const requestPosts = () => dispatch => (
  getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .fail(errors => console.log(errors))
);
