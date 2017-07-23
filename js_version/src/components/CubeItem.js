import * as THREE from 'three';

const CubeItem = (width, height, depth, widthSegments, heightSegments, depthSegments, newColor)=>{
  let geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
  let material = new THREE.MeshBasicMaterial( { color: newColor } );
  let cube = new THREE.Mesh( geometry, material );

  return cube;
}

export default CubeItem;
