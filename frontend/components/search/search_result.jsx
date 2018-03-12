import React from 'react';

const SearchResult = ({ subreddit, subscribe }) => {

  return (
    <div>
      {`/r/${subreddit}`}
      <button onClick={subscribe}>+</button>
    </div>
  );
};

export default SearchResult;
