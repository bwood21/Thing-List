import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things : {
      'thing-1': {id:'thing-1',name:'milk'},
      'thing-2': {id: 'thing-2',name:'bread'},
      'thing-3': {id: 'thing-3',name:'Bibb lettuce'},
    }
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <ThingList things={this.state.things}/>
      </div>
    );
  }
}

export default App;
