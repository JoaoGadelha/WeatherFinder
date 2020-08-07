import React from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Components/Result'
import SearchBar from './Components/SearchBar'

function App() {
  return (
    <div className="App clouds">
      <div className="Grid-item">
        <div className="Head"><h1>Weather Finder</h1></div>
        <SearchBar />
        <div className="Footer"> <h1>Developed by João Gadelha - <a href='https://joaoricardotg.netlify.app'> Browse my previous projects </a></h1></div>
      </div>
    </div>
  );

}

export default App;
