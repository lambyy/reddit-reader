import React from 'react';

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <span className="domain">({post.domain})</span>
      <span className="submission">
        submitted by
        <a href={`https://www.reddit.com/user/${post.author}`}>{post.author}</a>
      </span>
    </div>
  );
};

export default Post;
