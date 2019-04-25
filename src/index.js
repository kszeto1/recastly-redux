import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
// import configureStore from './store/configureStore.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

// const store = configureStore();

ReactDOM.render(
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  document.getElementById('app')
);

/*
const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('app')
);
*/