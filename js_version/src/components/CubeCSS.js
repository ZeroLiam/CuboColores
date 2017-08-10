import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/cubes.css';

class CubeCSS extends Component{

  renderCubes(){
    //Once again, let's define the amount of cubes by row/col
    let rows = this.props.floorRows;
    let cols = this.props.floorCols;
    let floors = this.props.floors;

    //Let's match the map of each floor here, starting by floor 0
    let leftMapping = this.props.leftside;
    let rightMapping = this.props.rightside;

    //Now, let's map the left side with the numbers from the
    //left-bottom/left-top to right-top/right-bottom sequence
    let sequenceUp = this.props.sequenceR;
    let sequenceDown = this.props.sequenceL;

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
    let fr_translateZ = 25;//Row +50
    let ri_translateZ = 25;//Row +50
    let le_translateZ = 25;//Row -50
    let ba_translateZ = 25;//Row -50
    let to_translateZ = 25;
    let bo_translateZ = 25;

    /*Start translation X for all*/
    let fr_translateX = 0;//Col +50
    let ri_translateX = 0;
    let le_translateX = 0;
    let ba_translateX = 0;
    let to_translateX = 0;
    let bo_translateX = 0;

    /*Start translation Y for all*/
    let fr_translateY = 0;
    let ri_translateY = 0;
    let le_translateY = 0;
    let ba_translateY = 0;
    let to_translateY = 0;//Row +50
    let bo_translateY = 0;//Row -50

    let cr = 1;
    let rr = 1;
    let m4 = 0;
    let m16 = 0;

    //Now make the cube(s)
    let myCube = ((rw, i, len) =>{
        while (++i <= len) {
          //Define the faces IDs
          let fr = "front" + i;
          let ri = "right" + i;
          let le = "left" + i;
          let ba = "back" + i;
          let to = "top" + i;
          let bo = "bottom" + i;

          //Id by floor and side
          let fl = "floor-";
          let sd = "side-";

          //For each 4 modify the IDs & spit rows every 4 cubes
          if(4 * cr == i){
            m4 = i;
            cr++;
          }
          //Spit floors every 16th cube
          if(16 * rr == i){
            m16 = i;
            rr++;
          }

          //Define the CSS for each face
          let dynamicStyle = {
            blue: 'rgba(0,0,255,0.3)',
            red:  'rgba(255,0,0,0.3)',
            dFront:   `rotateY(   ${fr_rotateY}deg ) translateZ( ${fr_translateZ}px ) translateX( ${fr_translateX}px ) translateY( ${fr_translateY}px )`,
            dRight:   `rotateY(   ${ri_rotateY}deg ) translateZ( ${ri_translateZ}px ) translateX( ${ri_translateX}px ) translateY( ${ri_translateY}px )`,
            dLeft:    `rotateY(   ${le_rotateY}deg ) translateZ( ${le_translateZ}px ) translateX( ${le_translateX}px ) translateY( ${le_translateY}px )`,
            dBack:    `rotateX(   ${ba_rotateX}deg ) translateZ( ${ba_translateZ}px ) translateX( ${ba_translateX}px ) translateY( ${ba_translateY}px )`,
            dTop:     `rotateX(   ${to_rotateX}deg ) translateZ( ${to_translateZ}px ) translateX( ${to_translateX}px ) translateY( ${to_translateY}px )`,
            dBottom:  `rotateX(   ${bo_rotateX}deg ) translateZ( ${bo_translateZ}px ) translateX( ${bo_translateX}px ) translateY( ${bo_translateY}px )`
          };

          //Define the faces tags
          let fr_fig = <figure className={fr} style={{transform: dynamicStyle.dFront, backgroundColor: dynamicStyle.blue}} key={fr}></figure>;
          let ri_fig = <figure className={ri} style={{transform: dynamicStyle.dRight, backgroundColor: dynamicStyle.blue}} key={ri}></figure>;
          let le_fig = <figure className={le} style={{transform: dynamicStyle.dLeft, backgroundColor: dynamicStyle.blue}} key={le}></figure>;
          let ba_fig = <figure className={ba} style={{transform: dynamicStyle.dBack, backgroundColor: dynamicStyle.blue}} key={ba}></figure>;
          let to_fig = <figure className={to} style={{transform: dynamicStyle.dTop, backgroundColor: dynamicStyle.red}} key={to}></figure>;
          let bo_fig = <figure className={bo} style={{transform: dynamicStyle.dBottom, backgroundColor: dynamicStyle.blue}} key={bo}></figure>;
          //Define faces in divs
          rw.push(fr_fig);
          rw.push(ri_fig);
          rw.push(le_fig);
          rw.push(ba_fig);
          rw.push(to_fig);
          rw.push(bo_fig);


          //Increase/Decrease xyz position/rotation for faces
          fr_translateX += 50;
          ba_translateX += 50;
          bo_translateX += 50;
          to_translateX += 50;
          ri_translateZ += 50;
          le_translateZ -= 50;

          if(i == m4){
            //change front
            fr_translateZ += 50;
            fr_translateX = 0;
            //change back
            ba_translateZ -= 50;
            ba_translateX = 0;
            //change left
            le_translateZ = 25;
            le_translateX += 50;
            //change right
            ri_translateZ = 25;
            ri_translateX -= 50;
            //change top
          //  to_translateZ = 25;
            to_translateX = 0;
            to_translateY += 50;
            //change bottom
            //bo_translateZ = 25;
            bo_translateX = 0;
            bo_translateY -= 50;
          }

          if(i == m16){
            //change front
            fr_translateY +=50;
            fr_translateX = 0;
            fr_translateZ = 25;
            //change back
            ba_translateY -=50;
            ba_translateX = 0;
            ba_translateZ = 25;
            //change left
            le_translateZ = 25;
            le_translateX = 0;
            le_translateY += 50;
            //change right
            ri_translateZ = 25;
            ri_translateX = 0;
            ri_translateY += 50;
            //change top
            to_translateZ -= 50;
            to_translateX = 0;
            to_translateY = 0;
            //change bottom
            bo_translateZ += 50;
            bo_translateX = 0;
            bo_translateY = 0;
          }

        }
        return rw;
      })([], 0, (rows*cols)*floors);

    return myCube;
  }

  render(){
    var lol = {
        green: 'rgba(0,255,0,1)',
        red: 'rgba(255,0,0,0.3)',
        blue: 'rgba(0,0,255,0.3)',
        black: 'rgba(0,0,0,0.3)',
        transform: `rotateY(${this.props.rotY}deg) rotateX(${this.props.rotX}deg) rotateZ(${this.props.rotZ}deg)`
    };


    return(
      <div className="container">
        <div id="cube" className="show-rotation">
          {this.renderCubes()}
        </div>
      </div>
    );
  }
}

export default CubeCSS;
