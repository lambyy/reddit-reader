import React from 'react';
import SearchBarContainer from './search/search_bar_container';
import SearchResultContainer from './search/search_result_container';
import PostContainer from './post/post_container';


const App = () => (
  <div>
    <h1 className="header">Reddit Reader</h1>
    <SearchBarContainer />
    <SearchResultContainer />
    <PostContainer />
  </div>
);

export default App;
