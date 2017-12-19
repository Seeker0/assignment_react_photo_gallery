import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './gallery';
import githubResponse from './photos';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="container">
          <Gallery data={githubResponse} />
        </div>
      </div>
    );
  }
}

export default App;
