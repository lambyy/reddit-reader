import { connect } from 'react-redux';
import { requestPosts } from '../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
  posts: state.posts['todayilearned'] || []
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: (subreddit) => dispatch(requestPosts(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
