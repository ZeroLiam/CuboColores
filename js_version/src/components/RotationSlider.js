import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/renderStyles.css';

class RotationSlider extends Component{
  constructor(props){
    super(props);

    this.state = {
      rotationLvl: 0
    }
  }

  onIntensityChange(e){
    let value = e.target.value;
    this.props.onUpdate(e.target.value);

    if(!_.isEmpty(e.target.value)){
      this.setState(prevState =>{
        prevState.rotationLvl = value;

        return prevState;
      });
    }
  }

  render(){
    return(
      <div>
        <div className="sliderControl">
          <label htmlFor={this.props.Axis}>{this.props.Axis} </label>
          <input type="range" id={this.props.Axis} min="-360" max="360" value={this.state.rotationLvl} onChange={(...args) => this.onIntensityChange(...args)} />
        </div>
        <output htmlFor={this.props.Axis} id="level">{this.state.rotationLvl}</output>
      </div>
    );
  }
}

export default RotationSlider;
