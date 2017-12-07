import fetchJsonp from 'fetch-jsonp';

export default class RedditAPI {
  static async getPosts(subreddit) {
    try {
      let response = await fetch("https://www.reddit.com/r/todayilearned.json", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  static async getRecommendedSubreddits() {
    try {
      let response = await fetch("https://www.reddit.com/subreddits/popular.json", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  static async getSearchSubreddits() {
    try {
      let response = await fetchJsonp("https://www.reddit.com/subreddits/search?q=today", {
        method: 'GET',
        // mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },

      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
};
