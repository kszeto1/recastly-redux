import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// var SearchContainer = () => {

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

/*
define a searchContainer component
  that uses Search component
  our action dispatcher is handleSearchChange
    somehow using connect

    dispatch(handleSearchChange)
    want export connect()(Search)

    need to use mapStateToProps
      const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
      };
    };

    need to use mapDispatchToProps
      const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
        };
    };

    return connect(mapstateprops, mapdispatchprops)(search)
*/
const mapStateToProps = (state) => {
  return {
    value: state.handleSearchChange
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};

// return connect(mapStateToProps, mapDispatchToProps)(Search)
// };

// export default SearchContainer();

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;