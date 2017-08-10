import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/cubes.css';

class Cubo extends Component{

  showCubo(){
      //Cubo generated
      let i = this.props.cuboNum;

      //Define the faces IDs
      let fr = "front" + i;
      let ri = "right" + i;
      let le = "left" + i;
      let ba = "back" + i;
      let to = "top" + i;
      let bo = "bottom" + i;
      //Let's define the transform values
      /*Start rotation Y for front, right, and left*/
      let fr_rotateY = 0;
      let ri_rotateY = 90;
      let le_rotateY = -90;
      /*Start rotation X for back, top, and bottom*/
      let ba_rotateX = 180;
      let to_rotateX = 90;
      let bo_rotateX = -90;

      /*Start translation Z for all*/
      let fr_translateZ = this.props.fr_tz;
      let ri_translateZ = this.props.ri_tz;
      let le_translateZ = this.props.le_tz;
      let ba_translateZ = this.props.ba_tz;
      let to_translateZ = this.props.to_tz;
      let bo_translateZ = this.props.bo_tz;

      /*Start translation X for all*/
      let fr_translateX = this.props.fr_tx;
      let ri_translateX = this.props.ri_tx;
      let le_translateX = this.props.le_tx;
      let ba_translateX = this.props.ba_tx;
      let to_translateX = this.props.to_tx;
      let bo_translateX = this.props.bo_tx;

      /*Start translation Y for all*/
      let fr_translateY = this.props.fr_ty;
      let ri_translateY = this.props.ri_ty;
      let le_translateY = this.props.le_ty;
      let ba_translateY = this.props.ba_ty;
      let to_translateY = this.props.to_ty;
      let bo_translateY = this.props.bo_ty;

      //Id by floor and side
      let fl = "floor-" + i;
      let sd = "side-" + i;

      //Define the CSS for each face
      let dynamicStyle = {
        blue: 'rgba(0,0,255,0.3)',
        dFront:   `rotateY(   ${fr_rotateY}deg ) translateZ( ${fr_translateZ}px ) translateX( ${fr_translateX}px ) translateY( ${fr_translateY}px )`,
        dRight:   `rotateY(   ${ri_rotateY}deg ) translateZ( ${ri_translateZ}px ) translateX( ${ri_translateX}px ) translateY( ${ri_translateY}px )`,
        dLeft:    `rotateY(   ${le_rotateY}deg ) translateZ( ${le_translateZ}px ) translateX( ${le_translateX}px ) translateY( ${le_translateY}px )`,
        dBack:    `rotateX(   ${ba_rotateX}deg ) translateZ( ${ba_translateZ}px ) translateX( ${ba_translateX}px ) translateY( ${ba_translateY}px )`,
        dTop:     `rotateX(   ${to_rotateX}deg ) translateZ( ${to_translateZ}px ) translateX( ${to_translateX}px ) translateY( ${to_translateY}px )`,
        dBottom:  `rotateX(   ${bo_rotateX}deg ) translateZ( ${bo_translateZ}px ) translateX( ${bo_translateX}px ) translateY( ${bo_translateY}px )`
      };

      //Make the cube
      let rw = [];
      //Define the faces tags
      let fr_fig = <figure className={fr} style={{transform: dynamicStyle.dFront, backgroundColor: dynamicStyle.blue}} key={fr}></figure>;
      let ri_fig = <figure className={ri} style={{transform: dynamicStyle.dRight, backgroundColor: dynamicStyle.blue}} key={ri}></figure>;
      let le_fig = <figure className={le} style={{transform: dynamicStyle.dLeft, backgroundColor: dynamicStyle.blue}} key={le}></figure>;
      let ba_fig = <figure className={ba} style={{transform: dynamicStyle.dBack, backgroundColor: dynamicStyle.blue}} key={ba}></figure>;
      let to_fig = <figure className={to} style={{transform: dynamicStyle.dTop, backgroundColor: dynamicStyle.blue}} key={to}></figure>;
      let bo_fig = <figure className={bo} style={{transform: dynamicStyle.dBottom, backgroundColor: dynamicStyle.blue}} key={bo}></figure>;
      //Define faces in divs
      rw.push(fr_fig);
      rw.push(ri_fig);
      rw.push(le_fig);
      rw.push(ba_fig);
      rw.push(to_fig);
      rw.push(bo_fig);

      return rw;
  }

  render(){
      return(
        <div className="container">
          <div id="cube" className="show-rotation">
            {this.showCubo()}
          </div>
        </div>
      );
    }
  }

export default Cubo;
