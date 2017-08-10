import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/renderStyles.css';
import CubeCSS from './CubeCSS';

class CubeFloor extends Component{

renderFloor(){
  let mx = 0;
  let my = 0;
  let mz = 0;

    /*[=============================================================]*/
    /*[=================== CUBE/FLOOR TYPE ONLY ====================]*/
    /*[=============================================================]*/
    // if(cube_floor){
    //     colContent = <CubeCSS sortType="cube"
    //     //Rotate
    //     rotX={this.props.rotationx}
    //     rotY={this.props.rotationy}
    //     rotZ={this.props.rotationz}/>
    // }


      //Fill the rows and cols pls
      let rn = this.props.floorRows;
      let cn = this.props.floorCols;

      //Let's make the floor!
      //Rows
      let floor = ((rows, i, len) =>{
        while (++i <= len) {
          let name = "row-" + i;

          rows.push(<div id={name} key={i} className="rowc">{
            //Columns
            ((cols, x, ln)=>{
              while (++x <= ln) {
                let nae = "col-" + x;
                //Let's fill the cell content with the leftside and rightside props
                let colContent = "";
                let mapContent = "";

                  mx -=16;
                  my -=24;
                  mz +=2;
                  let tr = "translate3d(" + mx + "px, " + my + "px, " + mz + "px)";
                  let wow = {
                      transform: tr,
                      order: i
                  };

                //the column content from leftside will be on the left
                //if X is always less or equal than the half of the total length
                //if X is greater then the half then it will be on the right
                if(x <= ln/2){
                    mapContent = this.props.leftside;
                }else if(x > ln/2){
                    mapContent = this.props.rightside;
                }

                //Finally, after all the conditions and bs, push the cell with the
                //content into the columns lol
                var specialc = (x == 1) ? "cleft" : "";
                    colContent = <CubeCSS sortType="cube"
                    specialColor={specialc}
                    mapNumber={mapContent}
                    key={x}
                    //Rotate
                    rotX={mx}
                    rotY={my}
                    rotZ={mz}/>
                cols.push(<div id={nae} key={x} className="colx" style={{transform:wow.transform}}>{colContent}</div>);

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
      <div id={this.props.baseName} className="cubefloor">
        {this.renderFloor()}
      </div>
    );
  }
}

export default CubeFloor;
