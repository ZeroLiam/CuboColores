import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/renderStyles.css';

class Floor extends Component{

renderRows(){
  //Fill the rows and cols pls
  let rn = this.props.floorRows;
  let cn = this.props.floorCols;

  let sequenceL = this.props.leftside;
  let sequenceR = this.props.rightside;
  let seq = 0;

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
            //the column content from leftside will be on the left
            //if X is always less or equal than the half of the total length
            //if X is greater then the half then it will be on the right
            if(this.props.FloorName != "Side" && (x <= ln/2)){
                colContent = this.props.leftside;
            }else{
                colContent = this.props.rightside;
            }

            //Now, if the floor we're making is not a floor but a side, then
            //we fill top to bottom with the alternating leftside and rightside sequence
            //leftside on the odd numbers (x % 2 == 1)
            //rightside on the even numbers (x % 2 == 0)
            if(this.props.FloorName == "Side"){
              if(x % 2 == 0){
                colContent = sequenceR;
              }else if(x % 2 == 1){
                colContent = sequenceL;
              }
            }
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
        {this.renderRows()}
      </div>
    );
  }
}

export default Floor;
