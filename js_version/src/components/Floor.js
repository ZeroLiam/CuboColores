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
            //if X is greater then the content from rightside will be on the right
            if(this.props.FloorName != "Side" && (x <= ln/2)){
                colContent = this.props.leftside;
            }else{
                colContent = this.props.rightside;
            }

            //Now, if the floor we're making is not a floor but a side, then
            //we fill the right side with the sequence starting on the bottom-right and downwards
            //we fill the left side with the sequence starting on the bottom-left and updwards
            if(this.props.FloorName == "Side" && (x <= ln/2)){
              colContent = sequenceL;
              sequenceL++;
            }else if(this.props.FloorName == "Side" && (x > ln/2)){
              colContent = sequenceR;
              sequenceR--;
            }
            cols.push(<div id={nae} key={x} className="colx">{colContent}</div>);
          }
          return cols;
        })([], 0, cn)

      }</div>);
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
