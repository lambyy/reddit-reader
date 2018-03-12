import { connect } from 'react-redux';
import { deletePosts } from '../../actions/post_actions';
import SubscriptionIndex from './subscription_index';

const mapStateToProps = (state) => ({
  subscriptions: Object.keys(state.posts)
});

const mapDispatchToProps = (dispatch) => ({
  deletePosts: (subreddit) => dispatch(deletePosts(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionIndex);
