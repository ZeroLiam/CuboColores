import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/renderStyles.css';

class CubeCanvas extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h2>The Canvas</h2>
        <div className="canvasHolder">
          <canvas className="theCanvas"></canvas>
        </div>
      </div>
    );
  }
}

export default CubeCanvas;
