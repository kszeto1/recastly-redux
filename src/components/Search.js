import React from 'react';


var Search = (props) => (

  // handleInputChange(e) {
  //   getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });



  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => props.handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
)

export default Search;
