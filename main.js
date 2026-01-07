import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { blocks } from "./cubesAndTurns/cubeDisplay.js";
import { scene } from "./cubesAndTurns/cubeSides.js";
import { cubeArray } from "./algorithm/rotatingCubeArray.js";
import { movelist, updateCube } from "./cubesAndTurns/moveManager.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);

console.log(cubeArray);

camera.position.set(-80, 80, 100);
orbit.update();

window.addEventListener("keydown", (event) => {
  // We push the key (e.g., "1", "q", "u") directly to the list
  movelist.push(event.key);
});

function animate() {
  updateCube(blocks);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
