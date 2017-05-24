import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'
import _completed_ from './_completed_'

class Thing extends Component {
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  updateName = (ev) => {
    const { thing, saveThing } = this.props
    thing.name = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  // _completedthing_ = (thing) =>{
  //   const things = {...this.state.things}
  //   things[thing._completed_] = true;
  //   this.setState({things})
  // }

  render() {
    const { thing, removeThing, _completedthing_ } = this.props
    
   

    return (
      <li className="Thing">
        {/*checkbox*/}
        <_completed_ thing={thing} _completedthing_={_completedthing_}/>
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    )
  }
}

export default Thing