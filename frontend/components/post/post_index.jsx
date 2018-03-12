import React from 'react';
import Post from './post';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.requestPosts("news");
  }

  render() {
    const { posts } = this.props;
    let postsList = <div className="none">
                      No posts found. Subscribe to a subreddit to view!
                    </div>;

    if (posts.length !== 0) {
      postsList = posts.map( post =>
        <Post key={post.data.id} post={post.data} />
      );
    }

    return (
      <div className="posts">
        {postsList}
      </div>
    );
  }
}

export default PostIndex;
