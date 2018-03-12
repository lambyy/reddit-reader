
import React from 'react';
import Post from './post';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.requestPosts("news");
  }

  render() {
    const { posts } = this.props;
    const postsList = posts.map( post =>
      <Post key={post.data.id} post={post.data} />
    );

    return (
      <div className="posts">
        {postsList}
      </div>
    );
  }
}

export default PostIndex;
