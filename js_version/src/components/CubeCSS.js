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
    let leftMapping = this.props.leftside;//UP
    let rightMapping = this.props.rightside;//DOWN
    let numMapping = 0;
    let jk = 1;
    let m2 = 0;
    let leftcounter = 1;

    //Now, let's map the left side with the numbers from the
    //left-bottom/left-top to right-top/right-bottom sequence
    let sequenceUp = this.props.sequenceR;//DOWN
    let sequenceDown = this.props.sequenceL;//UP
    let sideMapping = 0;

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

    //Organize rows, columns and floors
    let cr = 1;
    let rr = 1;
    let m4 = 0;
    let m16 = 0;

    //Organize colors
    let rwall = this.props.cR;
    let gwall = this.props.cG;
    let bwall = this.props.cB;
    //Red kingdom
    let pisoR = 0;
    let pisoG = 0;
    let pisoB = 0;
    let floor3 = false;
    let floor2 = false;
    let floor1 = false;
    let floor0 = false;
    //Green kingdom
    let frontR = 0;
    let frontG = 0;
    let frontB = 0;
    let front3 = false;
    let front2 = false;
    let front1 = false;
    let front0 = false;

    //Now make the cube(s)!
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

          //For each 4 spit rows every 4 cubes
          if(4 * cr == i){
            m4 = i;
            cr++;
          }
          //Spit floors every 16th cube
          if(16 * rr == i){
            m16 = i;
            rr++;
          }

          //Assign IDs every row
          if(cr % 2 == 0){
            sideMapping = sequenceUp;
          }else{
            sideMapping = sequenceDown;
          }

          //Make the mapping for the cube
          //Floor has same mapping as arduino
          //if jk is odd then it maps to the left, otherwise to the right
          if(jk % 2 == 1){
            numMapping = leftMapping;
          }else{
            numMapping = rightMapping;
          }
          if(2 * jk == i){
            m2 = i;
            jk++;
          }

          floor3 = (numMapping == 4 || numMapping == 3) && (sideMapping == 7 || sideMapping == 0);
          floor2 = (numMapping == 5 || numMapping == 2) && (sideMapping == 6 || sideMapping == 1);
          floor1 = (numMapping == 6 || numMapping == 1) && (sideMapping == 5 || sideMapping == 2);
          floor0 = (numMapping == 7 || numMapping == 0) && (sideMapping == 4 || sideMapping == 3);

          //Define Color red
          if(rwall >=0 && rwall <= 63){
            if(floor0){
              pisoR = rwall;
            }else{
              pisoR = 0;
            }
          }if(rwall >=64 && rwall <= 127){
            if(floor1){
              pisoR = rwall;
            }else{
              pisoR = 0;
            }
          }if(rwall >=128 && rwall <= 191){
            if(floor2){
              pisoR = rwall;
            }else{
              pisoR = 0;
            }
          }if(rwall >=192 && rwall <= 255){
            if(floor3){
              pisoR = rwall;
            }else{
              pisoR = 0;
            }
          }

          
          //Define Color red
          if(gwall >=0 && gwall <= 63){
            if(front0){
              pisoG = gwall;
            }else{
              pisoG = 0;
            }
          }if(gwall >=64 && gwall <= 127){
            if(front1){
              pisoG = gwall;
            }else{
              pisoG = 0;
            }
          }if(gwall >=128 && gwall <= 191){
            if(front2){
              pisoG = gwall;
            }else{
              pisoG = 0;
            }
          }if(gwall >=192 && gwall <= 255){
            if(front3){
              pisoG = gwall;
            }else{
              pisoG = 0;
            }
          }

          //On every floor, left increases and right decreases
          if(i == m16){
            leftMapping++;
            rightMapping--;
            sequenceDown--;
            sequenceUp++;
          }
          //Define the CSS for each face
          let dynamicStyle = {
            red:          `rgba(${pisoR}, 0, 0,0.3)`,
            green:        `rgba(0, ${pisoG}, 0,0.3)`,
            blue:         `rgba(0, 0, ${pisoB},0.3)`,
            transparent:  'transparent',
            predefined:   `rgba(${pisoR}, ${pisoG}, ${pisoB},0.3)`,
            dFront:       `rotateY(   ${fr_rotateY}deg ) translateZ( ${fr_translateZ}px ) translateX( ${fr_translateX}px ) translateY( ${fr_translateY}px )`,
            dRight:       `rotateY(   ${ri_rotateY}deg ) translateZ( ${ri_translateZ}px ) translateX( ${ri_translateX}px ) translateY( ${ri_translateY}px )`,
            dLeft:        `rotateY(   ${le_rotateY}deg ) translateZ( ${le_translateZ}px ) translateX( ${le_translateX}px ) translateY( ${le_translateY}px )`,
            dBack:        `rotateX(   ${ba_rotateX}deg ) translateZ( ${ba_translateZ}px ) translateX( ${ba_translateX}px ) translateY( ${ba_translateY}px )`,
            dTop:         `rotateX(   ${to_rotateX}deg ) translateZ( ${to_translateZ}px ) translateX( ${to_translateX}px ) translateY( ${to_translateY}px )`,
            dBottom:      `rotateX(   ${bo_rotateX}deg ) translateZ( ${bo_translateZ}px ) translateX( ${bo_translateX}px ) translateY( ${bo_translateY}px )`
          };

          //Define the IDs for the faces
          let tbb = "cubo-" + numMapping + "-" + sideMapping; //tbb = Top-Back-Bottom
          //Define the faces tags
          let fr_fig = <figure className={fr} id={tbb} style={{transform: dynamicStyle.dFront, backgroundColor: dynamicStyle.green}} key={fr}></figure>;
          let ri_fig = <figure className={ri} id={tbb} style={{transform: dynamicStyle.dRight, backgroundColor: dynamicStyle.transparent}} key={ri}></figure>;
          let le_fig = <figure className={le} id={tbb} style={{transform: dynamicStyle.dLeft, backgroundColor: dynamicStyle.transparent}} key={le}>{sideMapping}</figure>;
          let ba_fig = <figure className={ba} id={tbb} style={{transform: dynamicStyle.dBack, backgroundColor: dynamicStyle.green}} key={ba}></figure>;
          let to_fig = <figure className={to} id={tbb} style={{transform: dynamicStyle.dTop, backgroundColor: dynamicStyle.red}} key={to}>{numMapping}</figure>;
          let bo_fig = <figure className={bo} id={tbb} style={{transform: dynamicStyle.dBottom, backgroundColor: dynamicStyle.red}} key={bo}></figure>;
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
        transform: `rotateY(${this.props.rY}deg) rotateX(${this.props.rX}deg) rotateZ(${this.props.rZ}deg)`
    }

    return(
      <div className="container">
        <div id="cube" className="show-rotation" style={{transform: lol.transform}}>
          {this.renderCubes()}
        </div>
      </div>
    );
  }
}

export default CubeCSS;
