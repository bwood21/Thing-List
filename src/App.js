import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <ThingList/>
      </div>
    );
  }
}

export default App;
