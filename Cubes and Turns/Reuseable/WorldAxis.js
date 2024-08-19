import * as THREE from "three";

export function rotateAroundWorldAxis(object, axis, radians) {
  const rotationMatrix = new THREE.Matrix4();
  rotationMatrix.makeRotationAxis(axis.normalize(), radians);
  object.matrixWorld.multiply(rotationMatrix);
  object.matrixWorldNeedsUpdate = true;
  object.rotation.setFromRotationMatrix(object.matrixWorld);
}

export const worldAxisX = new THREE.Vector3(1, 0, 0);
export const worldAxisY = new THREE.Vector3(0, 1, 0);
export const worldAxisZ = new THREE.Vector3(0, 0, 1);
