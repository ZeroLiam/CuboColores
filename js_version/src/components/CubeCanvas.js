import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import logo from './../logo.svg';
import './../styles/renderStyles.css';

class CubeCanvas extends Component{
  constructor(props, context) {
      super(props, context);
    }

    componentDidMount(){
      this.setupThree();
    }

  setupThree(){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    let renderer = new THREE.WebGLRenderer();
    let container = $(".canvasHolder");
    renderer.setSize( container.width(), container.height() );
    container.append( renderer.domElement );

    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    let animate = ()=> {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.1;
				// cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};
      animate();
  }

  render(){
    return(
      <div>
      <h2>The Canvas</h2>
        <div className="canvasHolder">
        </div>
      </div>
    );
  }
}

export default CubeCanvas;
