import RedditAPI from '../util/reddit_util';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveResults = (subreddits) => ({
  type: RECEIVE_RESULTS,
  subreddits
});

export const searchSubreddit = (query) => dispatch => (
  RedditAPI.getSubreddits(query)
    .then(response => {
      const results = response.data.children.map(result => {
        const url = result.data.url;
        return url ? url.slice(3, -1) : "";
      });
      return dispatch(receiveResults(results));
    })
);
