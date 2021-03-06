import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  var options = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  return (dispatch) => {
    searchYouTube(options, (d) => {
      dispatch(changeVideoList(d))
      dispatch(changeVideo(d[0]))
      // return {
      //   type: 'SEARCH EVENT',

      // }
    })
  }

};

export default handleVideoSearch;
