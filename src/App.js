import React, { Component } from 'react';
import './App.css';
import draw from './canvasSet';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolling: true
    }
  }

  componentDidMount(){
    this._drawing();
  }

  componentDidUpdate(){
    this._drawing();
  }

  render() {
    return (
      <div className="App">
        <div className="Dice-wrap">
          <canvas id="left-dice" width="150" height="150" style={this.styles.dice}>
          </canvas>
          <canvas id="right-dice" width="150" height="150" style={this.styles.dice}>
          </canvas>
        </div>
        <button id="roll" onClick={this._rolling}>Roll !</button>
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

  _rolling = () => {
    this.setState({
      rolling: !this.state.rolling
    })
  }

  _drawing = () => {
    var ld, ldc, rd, rdc

    ld = document.getElementById('left-dice');
    ldc = ld.getContext("2d");

    rd = document.getElementById('right-dice');
    rdc = rd.getContext("2d");

    draw(ld, ldc)
    draw(rd, rdc)
  }
}

export default App;
