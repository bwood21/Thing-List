import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import Login from './Login'
import Logout from './Logout'
import base, {auth} from './base'

class App extends Component {
  componentWillMount() {
    auth.onAuthStateChanged(
      (user) =>{
        if(user){
         this.authHandler({user})
        }
      }
    )
  }
  authHandler = (authData) => {
    this.setState({uid: authData.user.uid})
    this.setupThings()
  }

  setupThings(){
    this.ref = base.syncState(
      `${this.state.uid}/things`,
      {
        context: this,
        state: 'things'
      }
    )
  }
  state = {
    things: {},
    uid: null
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      _completed_:false,
      dueOn:''
    }
  }

 

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  signOut = () => {
    
    auth.signOut().then(()=>this.setState({uid:null}))
  }

  renderThings(){
  const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div>
        <AddThingButton addThing={this.addThing} />
        <ThingList
          things={this.state.things}
          {...actions}
        />
        <Logout signOut={this.signOut}/>
        </div>
    )
  }

  render() {
    
   

    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() : <Login authHandler={this.authHandler} /> }
        
      </div>
    );
  }
}

export default App;
