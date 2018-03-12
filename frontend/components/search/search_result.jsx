import React from 'react';

const SearchResult = ({ subreddit, subscribe }) => {

  return (
    <div>
      {subreddit}
      <button onClick={subscribe}>+</button>
    </div>
  );
};

export default SearchResult;
