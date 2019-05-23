import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const requestEx = () => {
  axios({
    method: 'get',
    url: '/users'
  })
      .then((users: any) => {
        console.log(users.data)
      })
      .catch((er) => {
        console.error(er)
      })
}

const App: React.FC = () => {
  requestEx()
    setTimeout(() => {
        requestEx()
    }, 10000)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
