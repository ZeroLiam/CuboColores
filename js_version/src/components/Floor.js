import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/renderStyles.css';
import CubeCSS from './CubeCSS';

class Floor extends Component{

renderCells(){
  //Fill the rows and cols pls
  let rn = this.props.floorRows;
  let cn = this.props.floorCols;

  //Sequence for the map floor
  let sequenceL = this.props.leftside;
  let sequenceR = this.props.rightside;
  let seq = 0;

  //See if it's a floor with squares or cubes
  let square_floor = this.props.floorType === "piso" && this.props.contentType === "square";
  let square_side = this.props.floorType === "side" && this.props.contentType === "square";

  //Setup the cobe 3D formation
  let mx = 30;
  let my = 10;
  let mz = 0;

  //Let's make the floor!
  //Rows
  let floor = ((rows, i, len) =>{
    while (++i <= len) {
      let name = "row-" + i;

      rows.push(<div id={name} key={i} className="rowx">{
        //Columns
        ((cols, x, ln)=>{
          while (++x <= ln) {
            let nae = "col-" + x;
            //Let's fill the cell content with the leftside and rightside props
            let colContent = "";

            /*[=============================================================]*/
            /*[================== SQUARE/FLOOR TYPE ONLY ===================]*/
            /*[=============================================================]*/
            //the column content from leftside will be on the left
            //if X is always less or equal than the half of the total length
            //if X is greater then the half then it will be on the right
            if(square_floor && (x <= ln/2)){
                colContent = this.props.leftside;
            }else if(square_floor && (x > ln/2)){
                colContent = this.props.rightside;
            }

            /*[=============================================================]*/
            /*[=================== SQUARE/SIDE TYPE ONLY ===================]*/
            /*[=============================================================]*/
            //Now, if the floor we're making is not a floor but a side, then
            //we fill top to bottom with the alternating leftside and rightside sequence
            //leftside on the odd numbers (x % 2 == 1)
            //rightside on the even numbers (x % 2 == 0)
            if(square_side){
              if(x % 2 === 0){
                colContent = sequenceR;
              }else if(x % 2 === 1){
                colContent = sequenceL;
              }
            }

            //Finally, after all the conditions and bs, push the cell with the
            //content into the columns lol
            cols.push(<div id={nae} key={x} className="colx">{colContent}</div>);
          }
          return cols;
        })([], 0, cn)

      }</div>);
      //Now decrement the left side by row, and increment the right side by row
        sequenceL--;
        sequenceR++;
    }
    return rows;
  })([], 0, rn);

  return floor;
}


  render(){
    return(
      <div id={this.props.FloorName} className="piso">
        <h1>{this.props.FloorName}</h1>
        {this.renderCells()}
      </div>
    );
  }
}

export default Floor;
