import { connect } from 'react-redux';
import { requestPosts } from '../../actions/post_actions';
import { removeSubreddit } from '../../actions/search_actions';
import SearchResultIndex from './search_result_index';

const filterResults = (state) => {
  const subscribed = Object.keys(state.posts);
  const filteredResults = state.search_results.filter(result =>
    !subscribed.includes(result)
  );
  return filteredResults;
};

const mapStateToProps = (state) => ({
  results: filterResults(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: (subreddit) => dispatch(requestPosts(subreddit)),
  removeSubreddit: (subreddit) => dispatch(removeSubreddit(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultIndex);
