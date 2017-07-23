import React, { Component } from 'react';
import CubeCanvas from './../components/CubeCanvas';

class Index extends Component{

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>CuboColores</h2>
        </div>
        <CubeCanvas />

        {this.props.children}
      </div>
    );
  }
}

export default Index;
