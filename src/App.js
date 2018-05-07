import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BoardGame} from './BoardGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React skill exercise</h1>
        </header>
        <p className="App-intro">
          <BoardGame />
        </p>

      </div>
    );
  }
}



export default App;
