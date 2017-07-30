import React, { Component } from 'react';
import Floor from './../components/Floor';
import ColorSlider from './../components/ColorSlider';

class Index extends Component{

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>CuboColores</h2>
        </div>
        <div className="mappy">
          <Floor FloorName="Piso 0" floorRows="4" floorCols="4" leftside="7" rightside="0" />
          <Floor FloorName="Piso 1" floorRows="4" floorCols="4" leftside="6" rightside="1" />
          <Floor FloorName="Piso 2" floorRows="4" floorCols="4" leftside="5" rightside="2" />
          <Floor FloorName="Piso 3" floorRows="4" floorCols="4" leftside="4" rightside="3" />
        </div>

        <div className="mappy">
          <Floor FloorName="Side" floorRows="4" floorCols="4" leftside="3" rightside="4" />

          <div className="r-region">
            <h1>RGB Controllers</h1>
            <ColorSlider Color="red" Value="10" />
            <ColorSlider Color="green" Value="10" />
            <ColorSlider Color="blue" Value="10" />
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Index;
