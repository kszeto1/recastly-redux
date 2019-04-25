import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {
  //TODO: define a VideoListContainer component which will hook up your action
  // dispatchers with your VideoList component props.
  /*
    mapStateToProp
    mapDispatchToProp - return null

    connect component to store by passing in mapStateToProps and mapDispatchToProp
  */
  const mapStateToProps = (state) => {
    return {
      videos: state.videoList
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),

    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(VideoList);
};



export default VideoListContainer();
