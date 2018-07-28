import React, { Component } from 'react';
import './App.css';
import draw from './canvasSet';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 1,
      right: 1
    }
  }
  componentDidMount(){
    const left = this.state.left
    const right = this.state.right
    this._result(left, right);
  }
  _result(L, R){
    let ld = document.getElementById('left-dice');
    let ldc = ld.getContext("2d");
  
    let rd = document.getElementById('right-dice');
    let rdc = rd.getContext("2d");
    
    draw(ldc, L)
    draw(rdc, R)
  }
  render() {
    return (
      <div className="App">
        <canvas id="left-dice" width="150" height="150" style={this.styles.dice}>
        </canvas>
        <canvas id="right-dice" width="150" height="150" style={this.styles.dice}>
        </canvas>
      </div>
    );
  }
  styles = {
    dice:{
      border: '1px solid #333',
      borderRadius: '10px',
      margin: '10px'
    }
  }
}

export default App;
