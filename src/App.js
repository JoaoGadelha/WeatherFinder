import React from 'react';
import './App.css';
import './mobile.css';
import Result from './Components/Result'
import SearchBar from './Components/SearchBar'
import Provider from './Context'


function App() {
  return (
    <Provider>
      <div className="App clouds">
        <div className="Container">
          <div className="Head"><h1>Weather Finder</h1></div>
          <SearchBar />
          <div className = 'ResultWrapper'>
            <Result />
          </div>
          <div className="Footer"> <h1>Developed by João Gadelha - <a href='https://joaoricardotg.netlify.app'> Browse my previous projects </a></h1></div>
        </div>
      </div>
    </Provider>
  );

}

export default App;
