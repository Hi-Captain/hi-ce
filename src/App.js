import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount(){
    this._draw();
  }
  
  render() {
    return (
      <div className="App">
        <canvas id="dice" width="150" height="150" style={styles.dice}>
        </canvas>
      </div>
    );
  }

  _draw(){
    let el = document.getElementById('dice');
    let ctx = el.getContext("2d");

    ctx.beginPath();
    ctx.arc(35, 35, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(115, 115, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(115, 35, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(35, 115, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(35, 75, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(115, 75, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#000";
    ctx.fill();
  }
}

const styles = {
  dice:{
    border: '1px solid #333',
    borderRadius: '10px',
    margin: '10px'
  }
}

export default App;
