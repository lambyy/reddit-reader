import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  updateQuery(e) {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }

  search(e) {
    e.preventDefault();
    this.props.searchSubreddit(this.state.query);
    this.setState({ query: "" });
  }

  render() {
    return (
      <form>
        <input type="text"
          onChange={this.updateQuery}
          value={this.state.query}/>
        <input type="submit"
          onClick={this.search}
          value="Search"/>
      </form>
    );
  }
}

export default SearchBar;
