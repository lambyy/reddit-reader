import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import RedditAPI from './util/reddit_util';
import { requestPosts } from './actions/post_actions';
// require('es6-promise').polyfill();

document.addEventListener("DOMContentLoaded", () => {
  // let response = RedditAPI.getPosts();
  // console.log(response);
  // let response2 = RedditAPI.getSearchSubreddits();
  // console.log(response2);
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);

  let a = requestPosts('todayilearned');
  a(store.dispatch);
});
