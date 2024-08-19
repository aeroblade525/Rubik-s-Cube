import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { blocks } from "./Cubes and Turns/CubeDisplay.js";
import { scene } from "./Cubes and Turns/CubeSides.js";

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

const axisHelper = new THREE.AxesHelper(20);
scene.add(axisHelper);

camera.position.set(30, 30, 30);
orbit.update();

const planeGeomerty = new THREE.PlaneGeometry(36, 36);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeomerty, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(36, 12);
scene.add(gridHelper);

function animate() {
  for (let i = 0; i < 26; i++) {
    blocks[i].rotation();
  }
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

const innercubegeo = new THREE.BoxGeometry(34.5, 34.5, 34.5);
var innercubemat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const innercube = new THREE.Mesh(innercubegeo, innercubemat);
scene.add(innercube);
