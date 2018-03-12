import React from 'react';

const SearchResult = ({ subreddit, subscribe }) => {

  return (
    <div className="result">
      <div>{`/r/${subreddit}`}</div>
      <button onClick={subscribe}>+</button>
    </div>
  );
};

export default SearchResult;
