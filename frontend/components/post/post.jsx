import React from 'react';

const Post = ({ post }) => {
  let thumbnail = post.thumbnail;
  if (!thumbnail.includes('http') && thumbnail !== 'nsfw') {
    thumbnail = 'default';
  }
  const nsfw = post.over_18 ? <span className="nsfw">NSFW</span> : "";

  return (
    <div className="post">
      <a href={post.url} className="thumbnail">
        <img src={thumbnail} />
      </a>
      <div className="details">
        <div className="title">
          <a href={post.url} target="_blank">{post.title}</a> &nbsp;
          ({post.domain})
        </div>
        <div>/r/{post.subreddit}</div>
        <div>
          submitted by&nbsp;
          <a href={`https://www.reddit.com/user/${post.author}`}>{post.author}</a>
        </div>
        <div>
          {nsfw}
          <a href={`https://www.reddit.com${post.permalink}`} className="comments">
            {`${post.num_comments} comments`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
