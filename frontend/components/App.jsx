import React from 'react';
import PostContainer from './post/post_container';
import SearchBarContainer from './search/search_bar_container';

const App = () => (
  <div>
    <h1 className="header">Reddit Reader</h1>
    <SearchBarContainer />
    <PostContainer />
  </div>
);

export default App;
