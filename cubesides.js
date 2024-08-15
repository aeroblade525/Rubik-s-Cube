import * as THREE from 'three';
export const scene = new THREE.Scene();

export function Cubesides(cubexpos, cubeypos, cubezpos){
	
	const allSides = new THREE.Group()

	for (let topbot = 0; topbot < 2; topbot += 1) {
		var topbotsidegeo = new THREE.BoxGeometry(10, 0.2, 10);
		var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
		if (topbot == 0) {
			var topbotsidemat = new THREE.MeshBasicMaterial({
				color: 0xFFFFFF,
			});
			var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
			topbotside.position.set(cubexpos, cubeypos - 5.8, cubezpos)
			allSides.add(topbotside)
		}
		if (topbot == 1) {
			var topbotsidemat = new THREE.MeshBasicMaterial({
				color: 0xefff3b,
			});
			var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
			topbotside.position.set(cubexpos, cubeypos + 5.8, cubezpos)
			allSides.add(topbotside)
		}
	}
	for (let leftright = 0; leftright < 2; leftright += 1) {
		var leftrightsidegeo = new THREE.BoxGeometry(0.2, 10, 10);
		var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
		if (leftright == 0) {
			var leftrightsidemat = new THREE.MeshBasicMaterial({
				color: 0xcf5006,
			});
			var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
			leftrightside.position.set(cubexpos - 5.8, cubeypos, cubezpos)
			allSides.add(leftrightside)
		}
		if (leftright == 1) {
			var leftrightsidemat = new THREE.MeshBasicMaterial({
				color: 0xcf0606,
			});
			var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
			leftrightside.position.set(cubexpos + 5.8, cubeypos, cubezpos)
			allSides.add(leftrightside)
		}
	}
	for (let forbac = 0; forbac < 2; forbac += 1) {
		var forbacsidegeo = new THREE.BoxGeometry(10, 10, 0.2);
		var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
		if (forbac == 0) {
			var forbacsidemat = new THREE.MeshBasicMaterial({
				color: 0x33f52c,
			});
			var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
			forbacside.position.set(cubexpos, cubeypos, cubezpos - 5.8)
			allSides.add(forbacside)
		}
		if (forbac == 1) {
			var forbacsidemat = new THREE.MeshBasicMaterial({
				color: 0x8a1fdb,
			});
			var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
			forbacside.position.set(cubexpos, cubeypos, cubezpos + 5.8)
			allSides.add(forbacside)
		}
	}

	scene.add(allSides);
	if (cubexpos > 6) {
		window.addEventListener('keydown', (event) => {
			if (event.key === '1') {
				allSides.rotation.x += Math.PI / 2;
			}
		});
	}
	if (cubexpos < 6 && cubexpos > -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '2') {
				allSides.rotation.x += Math.PI / 2;
			}
		});
	}
	if (cubexpos < -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '3') {
				allSides.rotation.x += Math.PI / 2;
			}
		});
	}
	if (cubezpos > 6) {
		window.addEventListener('keydown', (event) => {
			if (event.key === '4') {
				allSides.rotation.z += Math.PI / 2;
			}
		});
	}
	if (cubezpos < 6 && cubezpos > -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '5') {
				allSides.rotation.z += Math.PI / 2;
			}
		});
	}
	if (cubezpos < -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '6') {
				allSides.rotation.z += Math.PI / 2;
			}
		});
	}
	if (cubeypos > 6) {
		window.addEventListener('keydown', (event) => {
			if (event.key === '7') {
				allSides.rotation.y += Math.PI / 2;
			}
		});
	}
	if (cubeypos < 6 && cubeypos > -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '8') {
				allSides.rotation.y += Math.PI / 2;
			}
		});
	}
	if (cubeypos < -6){
		window.addEventListener('keydown', (event) => {
			if (event.key === '9') {
				allSides.rotation.y += Math.PI / 2;
			}
		});
	}
}