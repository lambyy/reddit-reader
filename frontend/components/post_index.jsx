
import React from 'react';
import Post from './post';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestPosts("todayilearned");
  }

  render() {
    const { posts } = this.props;
    const postsList = posts.map( post =>
      <Post key={post.data.id} post={post.data} />
    );

    return (
      <div>
        POST INDEX!
        {postsList}
      </div>
    );
  }
}

export default PostIndex;
