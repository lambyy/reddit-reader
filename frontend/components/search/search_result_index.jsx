import React from 'react';
import SearchResult from './search_result';

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(subreddit) {
    return () => {
      this.props.requestPosts(subreddit);
      this.props.removeSubreddit(subreddit)
    };
  }

  render() {
    const { results } = this.props;
    const resultsList = results.map( (result, idx) =>
      <SearchResult key={`result-${idx}`}
                    subreddit={result}
                    subscribe={this.subscribe(result)} />
    );

    return (
      <div>
        {resultsList}
      </div>
    );
  }
}

export default SearchResultIndex;
