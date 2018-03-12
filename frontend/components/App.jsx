import React from 'react';
import SubscriptionContainer from './subscription/subscription_container';
import SearchBarContainer from './search/search_bar_container';
import SearchResultContainer from './search/search_result_container';
import PostContainer from './post/post_container';


const App = () => (
  <div className="reddit-reader">
    <h1 className="header">
      <img src="reddit_alien.png"/>
      Reddit Reader
    </h1>
    <SubscriptionContainer />
    <SearchBarContainer />
    <SearchResultContainer />
    <PostContainer />
  </div>
);

export default App;
