import React from 'react';

const Subscription = ({ subreddit, unsubscribe }) => {

  return (
    <div className="subscription">
      <div>{`/r/${subreddit}`}</div>
      <button onClick={unsubscribe}>x</button>
    </div>
  );
};

export default Subscription;
