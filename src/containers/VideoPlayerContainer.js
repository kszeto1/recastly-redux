import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
// mapStateToProps(state)
// mapDispatchToProps(dispatch)
// connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
const mapStateToprops = (state) => {
  return {
    video: state.currentVideo
  }
}

const mapDispatchToProps = (dispatch) => {
  return null;
}

// return connect(mapStateToprops, mapDispatchToProps)(VideoPlayer);
// };

var VideoPlayerContainer = connect(mapStateToprops, mapDispatchToProps)(VideoPlayer);
export default VideoPlayerContainer;
