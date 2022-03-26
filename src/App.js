import React, { useState, useEffect } from 'react';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './style.css';

function App() {

  // return (
    const story = useStoryblok('landingpage', { version: 'published' });

    if (!story?.content) {
      return <div>Loading...</div>;
    }
  
    return <StoryblokComponent blok={story.content} />;
    // <Header />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
}

export default App;
