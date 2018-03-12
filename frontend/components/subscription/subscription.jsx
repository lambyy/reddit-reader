import React from 'react';

const Subscription = ({ subreddit, unsubscribe }) => {

  return (
    <div className="subscription">
      {`/r/${subreddit}`}
      <button onClick={unsubscribe}>x</button>
    </div>
  );
};

export default Subscription;
