import { connect } from 'react-redux';
import { requestPosts } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
  posts: orderPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: (subreddit) => dispatch(requestPosts(subreddit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);

const orderPosts = ({ posts }) => {
  let allPosts = [];
  for (let subreddit in posts) {
    allPosts = allPosts.concat(posts[subreddit]);
  }

  return allPosts.sort( (a, b) =>
    a.data.score < b.data.score ? 1 : -1
  );
};
