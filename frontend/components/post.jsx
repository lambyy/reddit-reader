import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2><a href={post.url}>{post.title}</a> </h2>
      <span className="domain">({post.domain})</span>
      <span className="submission">
        submitted by
        <a href={`https://www.reddit.com/user/${post.author}`}>{post.author}</a>
      </span>
      <a href={`https://www.reddit.com${post.permalink}`}>{post.num_comments} comments</a>
      <a href={post.url}><img src={post.thumbnail} /></a>
    </div>
  );
};

export default Post;
