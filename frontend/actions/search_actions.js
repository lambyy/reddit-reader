import RedditAPI from '../util/reddit_util';

export const RECEIVE_SUBREDDITS = "RECEIVE_SUBREDDITS";

const receiveSubreddits = (subreddits) => ({
  type: RECEIVE_SUBREDDITS,
  subreddits
});

export const searchSubreddit = (query) => dispatch => (
  RedditAPI.getSubreddits(query)
    .then(response => {
      const results = response.data.children.map(result => result.data.url);
      return dispatch(receiveSubreddits(results));
    })
);
