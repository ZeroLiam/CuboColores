import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/cubes.css';

class CubeCSS extends Component{

  render(){
    return(
      <div id="cubeCSS">
      <div className="wrapper">
        <div className="cube">
          <div className="front face">front</div>
          <div className="back face">back</div>
          <div className="top face">top</div>
          <div className="bottom face">bottom</div>
          <div className="left face">left</div>
          <div className="right face">right</div>
        </div>
      </div>
      </div>
    );
  }
}

export default CubeCSS;
