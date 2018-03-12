import { connect } from 'react-redux';
import { requestPosts } from '../../actions/post_actions';
import SearchResultIndex from './search_result_index';

const mapStateToProps = (state) => ({
  results: state.search_results
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: (subreddit) => dispatch(requestPosts(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultIndex);
