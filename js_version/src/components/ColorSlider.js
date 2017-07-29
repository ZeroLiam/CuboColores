import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './../styles/renderStyles.css';

class ColorSlider extends Component{
  constructor(props){
    super(props);

    this.state = {
      intensityLvl: 0
    }
  }

  onIntensityChange(e){
    let value = e.target.value;

    if(!_.isEmpty(e.target.value)){
      this.setState(prevState =>{
        prevState.intensityLvl = value;

        return prevState;
      });
    }
  }

  render(){
    return(
      <div>
        <div className="sliderControl">
          <label htmlFor={this.props.Color}>{this.props.Color} </label>
          <input type="range" id={this.props.Color} min="0" max="255" value={this.state.intensityLvl} onChange={(...args) => this.onIntensityChange(...args)} />
        </div>
        <output htmlFor={this.props.Color} id="level">{this.state.intensityLvl}</output>
      </div>
    );
  }
}

export default ColorSlider;
