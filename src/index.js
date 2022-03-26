import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Header from './Components/Section';

storyblokInit({
  accessToken: process.env.REACT_APP_TOKEN,
  use: [apiPlugin],
  components: {
    page: Header
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


