import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  { CSSTransition } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <>
        <CSSTransition 
          in={this.state.show}
          timeout={1000}
          classNames='fade'
        >
          <div>
            hello world
          </div>
        </CSSTransition>
        <button onClick={this.handleToggole}>toggole</button>
      </>
    )
  }

  handleToggole = () => {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;
