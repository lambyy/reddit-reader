import RedditAPI from '../util/reddit_util';

export const RECEIVE_SUBREDDITS = "RECEIVE_SUBREDDITS";
export const REMOVE_SUBREDDIT = "REMOVE_SUBREDDIT";

const receiveSubreddits = (subreddits) => ({
  type: RECEIVE_SUBREDDITS,
  subreddits
});

export const removeSubreddit = (subreddit) => ({
  type: REMOVE_SUBREDDIT,
  subreddit
});

export const searchSubreddit = (query) => dispatch => (
  RedditAPI.getSubreddits(query)
    .then(response => {
      const results = response.data.children.map(result => result.data.url.slice(3, -1));
      return dispatch(receiveSubreddits(results));
    })
);
