import { connect } from 'react-redux';
import { requestPosts } from '../../actions/post_actions';
import PostIndex from './post_index';

const orderPosts = ({ posts }) => {
  let allPosts = [];
  for (let subreddit in posts) {
    allPosts = allPosts.concat(posts[subreddit]);
  }
  console.log(allPosts);
  return allPosts;
};

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
