import React from 'react';
import Post from './post';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.requestPosts("news");
  }

  render() {
    return (
      <div className="posts">
        {
          this.props.posts.map( post =>
            <Post key={post.data.id} post={post.data} />
          )
        }
      </div>
    );
  }
}

export default PostIndex;
