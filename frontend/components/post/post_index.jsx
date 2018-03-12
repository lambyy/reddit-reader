import React from 'react';
import Post from './post';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.requestPosts("news");
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.posts.length === 0) {
      this.props.requestPosts("news");
    }
  }

  render() {
    const { posts } = this.props;
    let postsList  = posts.map( post =>
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
