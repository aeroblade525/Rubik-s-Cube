import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(30, 30, 30);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(10, 10, 10);
scene.add(cube);

// Define rotation increment (in radians)
const rotationIncrement = Math.PI / 4; // 15 degrees

// Function to rotate around world axis
function rotateAroundWorldAxis(object, axis, radians) {
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationAxis(axis.normalize(), radians);

    // Apply the rotation matrix to the cube's position
    const position = object.position.clone().applyMatrix4(rotationMatrix);
    object.position.copy(position);

    // Update the object's rotation
    object.rotation.setFromRotationMatrix(rotationMatrix);
}

// Define world axes
const worldAxisX = new THREE.Vector3(1, 0, 0);
const worldAxisY = new THREE.Vector3(0, 1, 0);
const worldAxisZ = new THREE.Vector3(0, 0, 1);

// Function to handle keydown events
function onKeyDown(event) {
    switch (event.key) {
        case '1':
            rotateAroundWorldAxis(cube, worldAxisX, rotationIncrement);
            break;
        case '2':
            rotateAroundWorldAxis(cube, worldAxisY, rotationIncrement);
            break;
        case '3':
            rotateAroundWorldAxis(cube, worldAxisZ, rotationIncrement);
            break;
    }
}

// Add event listener for keydown events
window.addEventListener('keydown', onKeyDown);

function animate() {
  requestAnimationFrame(animate);

  // Continuously rotate around the world axes
  // rotateAroundWorldAxis(cube, worldAxisX, Math.PI / 2000);
  // rotateAroundWorldAxis(cube, worldAxisY, 0.01);
  // rotateAroundWorldAxis(cube, worldAxisZ, 0.01);

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
