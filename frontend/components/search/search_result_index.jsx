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
    };
  }

  render() {
    const { results } = this.props;
    let resultsList = <div className="no-results">No subreddits found</div>;

    if (results.length !== 0) {
      resultsList = results.map( (result, idx) =>
        <SearchResult key={`result-${idx}`}
          subreddit={result}
          subscribe={this.subscribe(result)} />
      );
    }

    return (
      <div className="results">
        {resultsList}
      </div>
    );
  }
}

export default SearchResultIndex;
