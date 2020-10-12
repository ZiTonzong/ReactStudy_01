import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      list: [],
      show: true
    }
  }
  render() {
    return (
      <>
        {/* <CSSTransition 
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {
            el.style.color = 'blue'
          }}
          appear={true}
        >
          <div>
            hello world
          </div>
        </CSSTransition>
        <button onClick={this.handleToggole}>toggole</button> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition 
                  in={this.state.show}
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => {
                    el.style.color = 'blue'
                  }}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggole</button>
      </>
    )
  }

  handleAddItem = () => {
    this.setState(prevState => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  handleToggole = () => {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;
