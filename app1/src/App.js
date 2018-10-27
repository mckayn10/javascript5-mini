import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    myName: 'Joe'
  }

  
  render() {
    return (
      <div className="App">
        <div>My name is {this.state.myName} </div>
      </div>
    );
  }
}


export default App;
