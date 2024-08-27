import * as THREE from "three";
export const scene = new THREE.Scene();
export function Cubesides(cubexpos, cubeypos, cubezpos) {
  const allSides = new THREE.Group();

  for (let topbot = 0; topbot < 2; topbot += 1) {
    var topbotsidegeo = new THREE.BoxGeometry(10, 0.2, 10);
    var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
    // White Side
    if (topbot == 0) {
      var topbotsidemat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
      topbotside.position.set(cubexpos, cubeypos - 5.8, cubezpos);
      allSides.add(topbotside);
    }
    // Yellow Side
    if (topbot == 1) {
      var topbotsidemat = new THREE.MeshBasicMaterial({
        color: 0xefff3b,
      });
      var topbotside = new THREE.Mesh(topbotsidegeo, topbotsidemat);
      topbotside.position.set(cubexpos, cubeypos + 5.8, cubezpos);
      allSides.add(topbotside);
    }
  }
  for (let leftright = 0; leftright < 2; leftright += 1) {
    var leftrightsidegeo = new THREE.BoxGeometry(0.2, 10, 10);
    var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
    // Orange Side
    if (leftright == 0) {
      var leftrightsidemat = new THREE.MeshBasicMaterial({
        color: 0xcf5006,
      });
      var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
      leftrightside.position.set(cubexpos - 5.8, cubeypos, cubezpos);
      allSides.add(leftrightside);
    }
    // Red Side
    if (leftright == 1) {
      var leftrightsidemat = new THREE.MeshBasicMaterial({
        color: 0xcf0606,
      });
      var leftrightside = new THREE.Mesh(leftrightsidegeo, leftrightsidemat);
      leftrightside.position.set(cubexpos + 5.8, cubeypos, cubezpos);
      allSides.add(leftrightside);
    }
  }
  for (let forbac = 0; forbac < 2; forbac += 1) {
    var forbacsidegeo = new THREE.BoxGeometry(10, 10, 0.2);
    var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
    // Greeen Side
    if (forbac == 0) {
      var forbacsidemat = new THREE.MeshBasicMaterial({
        color: 0x33f52c,
      });
      var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
      forbacside.position.set(cubexpos, cubeypos, cubezpos - 5.8);
      allSides.add(forbacside);
    }
    // Purple Side
    if (forbac == 1) {
      var forbacsidemat = new THREE.MeshBasicMaterial({
        color: 0x8a1fdb,
      });
      var forbacside = new THREE.Mesh(forbacsidegeo, forbacsidemat);
      forbacside.position.set(cubexpos, cubeypos, cubezpos + 5.8);
      allSides.add(forbacside);
    }
  }

  scene.add(allSides);
  return allSides;
}
