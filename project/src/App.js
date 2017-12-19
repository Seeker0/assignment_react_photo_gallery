import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './gallery';
import githubResponse from './photos';
import Search from './search';

const MyButton = ({ onSearch }) => (
  <button onClick={this.onSearch}>Search</button>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: /[A-Za-z]/,
      sort: 'ascending'
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    this.setState({
      query: {
      [e.target.name]: e.target.value
    }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Search data={githubResponse} callback={onSearch} />
        <div className="container">
          <Gallery data={githubResponse} query={} />
        </div>
      </div>
    );
  }
}

export default App;
