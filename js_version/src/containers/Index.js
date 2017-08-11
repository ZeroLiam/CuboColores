import React, { Component } from 'react';
import FloorMap from './../components/FloorMap';
import CubeCSS from './../components/CubeCSS';
import ColorSlider from './../components/ColorSlider';
import RotationSlider from './../components/RotationSlider';
import $ from 'jquery';

class Index extends Component{

    constructor(props) {
        super(props);

        this.state = {
          rotx: -26,
          roty: 48,
          rotz: -31,
          rcol: 0,
          gcol: 0,
          bcol: 0
        }
      }

    onUpdateRX(val){
      this.setState(prevState =>{
        prevState.rotx = val;
        return prevState;
      });
    }

    onUpdateRY(val){
      this.setState(prevState =>{
        prevState.roty = val;
        return prevState;
      });
    }

    onUpdateRZ(val){
      this.setState(prevState =>{
        prevState.rotz = val;
        return prevState;
      });
    }

    onUpdateRCol(val){
      this.setState(prevState =>{
        prevState.rcol = val;
        return prevState;
      });
    }

    onUpdateGCol(val){
      this.setState(prevState =>{
        prevState.gcol = val;
        return prevState;
      });
    }

    onUpdateBCol(val){
      this.setState(prevState =>{
        prevState.bcol = val;
        return prevState;
      });
    }

  render(){

    return(
      <div className="App">
        <div className="App-header">
          <h2>CuboColores</h2>
        </div>

        <div className="mainCube">
          <CubeCSS  floorRows="4" floorCols="4" floors="4"
                    leftside="4" rightside="3"
                    sequenceL="7" sequenceR="0"
                    rX={this.state.rotx} rY={this.state.roty} rZ={this.state.rotz}
                    cR={this.state.rcol} cG={this.state.gcol} cB={this.state.bcol}/>
          <div className="ctrl">
            <div>
              <h1>Rotation Controllers</h1>
              <RotationSlider Axis="axis_x" Value="0" onUpdate={(...args) => this.onUpdateRX(...args)} />
              <RotationSlider Axis="axis_y" Value="0" onUpdate={(...args) => this.onUpdateRY(...args)} />
              <RotationSlider Axis="axis_z" Value="0" onUpdate={(...args) => this.onUpdateRZ(...args)} />
            </div>
            <div>
              <h1>RGB Controllers</h1>
              <ColorSlider Color="red" Value="10" onUpdate={(...args) => this.onUpdateRCol(...args)} />
              <ColorSlider Color="green" Value="10" onUpdate={(...args) => this.onUpdateGCol(...args)} />
              <ColorSlider Color="blue" Value="10" onUpdate={(...args) => this.onUpdateBCol(...args)} />
            </div>
          </div>
        </div>
        <div className="mappy">
            <FloorMap FloorName="Pared" floorType="side" contentType="square"
            floorRows="4" floorCols="4"
            leftside="7" rightside="0" />
                <FloorMap FloorName="Piso 0" floorType="piso" contentType="square"
                floorRows="4" floorCols="4"
                leftside="7" rightside="0" />
                <FloorMap FloorName="Piso 1" floorType="piso" contentType="square"
                floorRows="4" floorCols="4"
                leftside="6" rightside="1" />
                <FloorMap FloorName="Piso 2" floorType="piso" contentType="square"
                floorRows="4" floorCols="4"
                leftside="5" rightside="2" />
                <FloorMap FloorName="Piso 3" floorType="piso" contentType="square"
                floorRows="4" floorCols="4"
                leftside="4" rightside="3" />
        </div>


        {this.props.children}
      </div>
    );
  }
}

export default Index;
