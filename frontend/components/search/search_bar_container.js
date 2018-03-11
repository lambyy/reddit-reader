import { connect } from 'react-redux';
import { searchSubreddit } from '../../actions/search_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => ({
  searchSubreddit: (query) => dispatch(searchSubreddit(query))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SearchBar);
