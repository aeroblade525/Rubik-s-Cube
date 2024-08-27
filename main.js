import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { blocks } from "./Cubes and Turns/CubeDisplay.js";
import { scene } from "./Cubes and Turns/CubeSides.js";
import { cubeArray } from "./Algorithm/Rotating Cube Array.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

console.log(cubeArray);

camera.position.set(30, 30, 30);
orbit.update();

function animate() {
  for (let i = 0; i < 26; i++) {
    blocks[i].rotation();
  }
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
