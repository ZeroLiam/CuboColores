import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorSlider from './ColorSlider.js';
import CubeItem from './CubeItem.js';
import './../styles/renderStyles.css';

class CubeCanvas extends Component{

    componentDidMount(){
      this.setupThree();
    }

  setupThree(){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // let controls = new THREE.TrackballControls( camera );
		// 		controls.rotateSpeed = 1.0;
		// 		controls.zoomSpeed = 1.2;
		// 		controls.panSpeed = 0.8;
		// 		controls.noZoom = false;
		// 		controls.noPan = false;
		// 		controls.staticMoving = true;
		// 		controls.dynamicDampingFactor = 0.3;
		// 		controls.addEventListener( 'change', updateRender );


    let renderer = new THREE.WebGLRenderer();
    let container = $(".canvasHolder");
    let stats;
    renderer.setSize( container.width(), container.height() );
    container.append( renderer.domElement );
    // stats = new stats();
    // container.append(stats.dom);

    /*let cube = new CubeItem(1, 1, 1,4,4,4, 0x00ff00);
    scene.add( cube );

    cube.rotation.x = 0.6;
    cube.rotation.y = 0.4;*/

    // let bigCubeRow = [];
    // let bigCubeCol = [];
    // let bigCubeFloor = [];
    //
    // for(var row = 0; row < 4; row++){
    //   let cube = new CubeItem(1, 1, 1,4,4,4, 0x00ff00);
    //   cube.rotation.x = 0.6;
    //   cube.rotation.y = 0.4;
    //
    //   bigCubeRow.push(cube);
    //   for(var col = 0; col < 4; col++){
    //     bigCubeCol.push(bigCubeRow);
    //     for(var floor = 0; floor < 4; floor++){
    //       bigCubeFloor.push(bigCubeCol);
    //     }
    //   }
    // }

    var geometry = new THREE.BoxBufferGeometry( 2,1,2 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );

    var cubeA = new THREE.Mesh( geometry, material );
    cubeA.position.set( 0, 0, 0 );

    var cubeB = new THREE.Mesh( geometry, material2 );
    cubeA.position.set( -2, -2, 0 );

    //create a group and add the two cubes
    //These cubes can now be rotated / scaled etc as a group
    var group = new THREE.Group();
    group.add( cubeA, cubeB);

    scene.add( group );

    camera.position.z = 4;

    let updateRender = () =>{
				renderer.render( scene, camera );
				// stats.update();
    }
    let renderInit = ()=> {
				requestAnimationFrame( renderInit );

				renderer.render(scene, camera);
        // controls.update();
			};
      renderInit();
  }

  render(){
    return(
      <div>
      <h2>The Canvas</h2>
      <div className="mainContainer">
        <div className="l-region">
          <div className="canvasHolder"></div>
        </div>
        <div className="r-region">
          <ColorSlider Color="red" Value="10" />
          <ColorSlider Color="green" Value="10" />
          <ColorSlider Color="blue" Value="10" />
        </div>
      </div>
      </div>
    );
  }
}

export default CubeCanvas;
