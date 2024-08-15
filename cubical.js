import * as THREE from 'three';
import { Cubesides } from './cubesides.js'
import { scene } from './cubesides.js'

export class cubical {
	constructor(xpos, ypos, zpos) {
		this.xpos = xpos;
		this.ypos = ypos;
		this.zpos = zpos;
        this.cube = null;
		this.rotateCubeR1 = false;
		this.rotateCubeR2 = false;
		this.rotateCubeR3 = false;
		this.rotateCubeF1 = false;
		this.rotateCubeF2 = false;
		this.rotateCubeF3 = false;
		this.rotateCubeU1 = false;
		this.rotateCubeU2 = false;
		this.rotateCubeU3 = false;
	}

	display() {
		var geometry = new THREE.BoxGeometry(11.4, 11.4, 11.4);
		var cubeMaterial = new THREE.MeshBasicMaterial({
			color: 0x202121,
		});
		this.cube = new THREE.Mesh(geometry, cubeMaterial);
		this.cube.position.set(this.xpos, this.ypos, this.zpos);
		Cubesides(this.xpos, this.ypos, this.zpos);
		scene.add(this.cube);
	}

	rotation() {
		if (this.xpos > 6) {
			window.addEventListener('keydown', (event) => {
				if (event.key === '1') {
					this.rotateCubeR1 = true;
				}
			});
			if (this.rotateCubeR1) {
				this.cube.rotation.x += Math.PI / 2;
				this.rotateCubeR1 = false; 
			}
		}
		if (this.xpos < 6 && this.xpos > -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '2') {
					this.rotateCubeR2 = true;
				}
			});
			if (this.rotateCubeR2) {
				this.cube.rotation.x += Math.PI / 2;
				this.rotateCubeR2 = false; 
			}
		}
		if (this.xpos < -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '3') {
					this.rotateCubeR3 = true;
				}
			});
			if (this.rotateCubeR3) {
				this.cube.rotation.x += Math.PI / 2;
				this.rotateCubeR3 = false; 
			}
		}
		if (this.zpos > 6) {
			window.addEventListener('keydown', (event) => {
				if (event.key === '4') {
					this.rotateCubeF1 = true;
				}
			});
			if (this.rotateCubeF1) {
				this.cube.rotation.z += Math.PI / 2;
				this.rotateCubeF1 = false; 
			}
		}
		if (this.zpos < 6 && this.zpos > -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '5') {
					this.rotateCubeF2 = true;
				}
			});
			if (this.rotateCubeF2) {
				this.cube.rotation.z += Math.PI / 2;
				this.rotateCubeF2 = false; 
			}
		}
		if (this.zpos < -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '6') {
					this.rotateCubeF3 = true;
				}
			});
			if (this.rotateCubeF3) {
				this.cube.rotation.z += Math.PI / 2;
				this.rotateCubeF3 = false; 
			}
		}
		if (this.ypos > 6) {
			window.addEventListener('keydown', (event) => {
				if (event.key === '7') {
					this.rotateCubeU1 = true;
				}
			});
			if (this.rotateCubeU1) {
				this.cube.rotation.y += Math.PI / 2;
				this.rotateCubeU1 = false; 
			}
		}
		if (this.ypos < 6 && this.ypos > -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '8') {
					this.rotateCubeU2 = true;
				}
			});
			if (this.rotateCubeU2) {
				this.cube.rotation.y += Math.PI / 2;
				this.rotateCubeU2 = false; 
			}
		}
		if (this.xpos < -6){
			window.addEventListener('keydown', (event) => {
				if (event.key === '9') {
					this.rotateCubeU3 = true;
				}
			});
			if (this.rotateCubeU3) {
				this.cube.rotation.y += Math.PI / 2;
				this.rotateCubeU3 = false; 
			}
		}
	}
}
