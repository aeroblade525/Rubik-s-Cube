import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up orbit controls for easy viewing
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Create a group to hold the cubies
const cubeGroup = new THREE.Group();

// Create 27 cubies to form a 3x3x3 Rubik's Cube
const cubies = [];
const cubeSize = 1;
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    for (let z = 0; z < 3; z++) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

      // Define six different materials for the six sides of the cube
      const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Blue
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Yellow
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Magenta
        new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Cyan
      ];

      const cube = new THREE.Mesh(geometry, materials);

      cube.position.set(x - 1, y - 1, z - 1);

      cubeGroup.add(cube);
      cubies.push(cube);
    }
  }
}

scene.add(cubeGroup);
camera.position.z = 5;

// Utility function to rotate a group of cubies
function rotateLayer(layer, axis, angle) {
  const group = new THREE.Group();
  layer.forEach(cube => group.add(cube));
  scene.add(group);
  const rotationMatrix = new THREE.Matrix4().makeRotationAxis(axis, angle);
  group.applyMatrix4(rotationMatrix);
  group.updateMatrixWorld(true);
  group.children.forEach(cube => {
    cube.position.applyMatrix4(group.matrix);
    cube.rotation.setFromRotationMatrix(cube.matrix);
    cube.updateMatrixWorld(true);
    cubeGroup.attach(cube);
  });
  scene.remove(group);
}

// Define layers for easy rotation access
const getLayer = (axis, index) => {
  const threshold = 0.1;
  return cubies.filter(cube => Math.abs(cube.position[axis] - index) < threshold);
};

// Animate rotation on key press
const rotationSpeed = Math.PI / 60;
let rotating = false;
let currentLayer = null;
let rotationAxis = null;
let remainingRotation = 0;

document.addEventListener('keydown', (event) => {
  if (rotating) return;

  let layer = null;
  if (event.key === '1') {
    layer = getLayer('x', -1); // Left face
    rotationAxis = new THREE.Vector3(1, 0, 0);
  } else if (event.key === '2') {
    layer = getLayer('x', 0); // Middle face (X)
    rotationAxis = new THREE.Vector3(1, 0, 0);
  } else if (event.key === '3') {
    layer = getLayer('x', 1); // Right face
    rotationAxis = new THREE.Vector3(1, 0, 0);
  } else if (event.key === '4') {
    layer = getLayer('y', -1); // Bottom face
    rotationAxis = new THREE.Vector3(0, 1, 0);
  } else if (event.key === '5') {
    layer = getLayer('y', 0); // Middle face (Y)
    rotationAxis = new THREE.Vector3(0, 1, 0);
  } else if (event.key === '6') {
    layer = getLayer('y', 1); // Top face
    rotationAxis = new THREE.Vector3(0, 1, 0);
  } else if (event.key === '7') {
    layer = getLayer('z', -1); // Front face
    rotationAxis = new THREE.Vector3(0, 0, 1);
  } else if (event.key === '8') {
    layer = getLayer('z', 0); // Middle face (Z)
    rotationAxis = new THREE.Vector3(0, 0, 1);
  } else if (event.key === '9') {
    layer = getLayer('z', 1); // Back face
    rotationAxis = new THREE.Vector3(0, 0, 1);
  }

  if (layer) {
    rotating = true;
    currentLayer = layer;
    remainingRotation = Math.PI / 2; // 90 degrees
  }
});

// Smooth rotation animation
function animate() {
  requestAnimationFrame(animate);

  if (rotating) {
    const angle = Math.min(remainingRotation, rotationSpeed);
    rotateLayer(currentLayer, rotationAxis, angle);
    remainingRotation -= angle;
    if (remainingRotation <= 0) {
      rotating = false;
    }
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();