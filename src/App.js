import React, { useState, useEffect } from 'react';
import './assets/style.css';

import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';


function App() {
  const [activeFile, setActiveFile] = useState('home');

  const fileData = {
    home: { name: 'index.js', icon: 'fab fa-js text-yellow', mode: 'JavaScript' },
    about: { name: 'about.md', icon: 'fab fa-markdown text-blue', mode: 'Markdown' },
    projects: { name: 'projects.html', icon: 'fa-solid fa-code text-orange', mode: 'HTML' },
    contact: { name: 'contact.css', icon: 'fab fa-css3-alt text-css', mode: 'CSS' }
  };

  return (
    <div className='app-container'>
      {/* Left most icon strip */}
      <ActivityBar />

      {/* The file explorer sidebar */}
      <Sidebar 
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        fileData={fileData}
      />

      {/* The main editor area */}
      <Editor 
        activeFile={activeFile} 
        currentFile={fileData[activeFile]} 
      />

      {/* Status bar */}
      <StatusBar langMode={fileData[activeFile].mode} />
    </div>
  )
}

export default App;