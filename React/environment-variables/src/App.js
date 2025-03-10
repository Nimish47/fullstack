import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  // use this to set title of App if you have only one .env file
  // useEffect(() => {
  //   if(process.env.NODE_ENV === "development") document.title = process.env.REACT_APP_DEVELOPMENT_TITLE;
  //   if(process.env.NODE_ENV === "production") document.title = process.env.REACT_APP_PRODUCTION_TITLE;    
  // },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
