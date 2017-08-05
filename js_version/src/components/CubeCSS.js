import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/cubes.css';

class CubeCSS extends Component{


  render(){
    var lol = {
        green: 'rgba(0,255,0,0.3)',
        red: 'rgba(255,0,0,0.3)',
        blue: 'rgba(0,0,255,0.3)',
        black: 'rgba(0,0,0,0.3)',
        transform: `rotateY(${this.props.rotY}deg) rotateX(${this.props.rotX}deg) rotateZ(${this.props.rotZ}deg)`
    };

    return(
      <div id="cubeCSS">
      <section className="container">
        <div id="cube" className="show-rotation">
          <figure className="front" style={{backgroundColor: lol.red}}>1</figure>
          <figure className="back" style={{backgroundColor: lol.black}}>2</figure>
          <figure className="right" style={{backgroundColor: lol.red}}>3</figure>
          <figure className="left" style={{backgroundColor: lol.green}}>4</figure>
          <figure className="top" style={{backgroundColor: lol.black}}>5</figure>
          <figure className="bottom" style={{backgroundColor: lol.blue}}>6</figure>
        </div>
      </section>
      </div>
    );
  }
}

export default CubeCSS;
