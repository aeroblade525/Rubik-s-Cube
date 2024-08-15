import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cubical } from './cubical.js'
import { scene } from './cubesides.js'

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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
	color: 0xFFFFFF,
	side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeomerty, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const gridHelper = new THREE.GridHelper(36, 12);
scene.add(gridHelper);

let blocks = []
for (let i = -1; i < 2; i++){
	blocks.push(new cubical(i * 12, 0, 0))
	for(let j = -1; j < 2; j++){
		blocks.push(new cubical(i * 12, j * 12, 0))
		for(let k = -1; k < 2; k++){
			blocks.push(new cubical(i * 12, j * 12, k * 12))
		}
	}
}

for (let i = 0; i < 39; i++){
	blocks[i].display()
}

function animate() {
	for (let i = 0; i < 39; i++){
		blocks[i].rotation()
	}
    renderer.render(scene, camera);
}

renderer.setAnimationLoop( animate );

const innercubegeo = new THREE.BoxGeometry(34.5, 34.5, 34.5);
var innercubemat = new THREE.MeshBasicMaterial({
	color: 0xFFFFFF,
});
const innercube = new THREE.Mesh(innercubegeo, innercubemat);
scene.add(innercube)