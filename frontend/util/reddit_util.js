// import fetchJsonp from 'fetch-jsonp';

export default class RedditAPI {
  static async getPosts(subreddit) {
    try {
      let response = await fetch(`https://www.reddit.com/r/${subreddit}.json`, {
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

  static async getSubreddits(query) {
    try {
      let response = await fetch(`https://www.reddit.com/api/subreddit_autocomplete_v2.json?query=${query}`, {
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
};
