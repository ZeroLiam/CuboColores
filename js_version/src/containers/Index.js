import React, { Component } from 'react';
import logo from './../logo.svg';
import CubeCanvas from './../components/CubeCanvas';

class Index extends Component{
  constructor(props){
    super(props);
  }

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
