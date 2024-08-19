import * as THREE from "three";
import { CenterPiece } from "./CenterPeice";
import { CornerPiece } from "./CornerPiece";
import { EdgePiece } from "./EdgePiece";
import { scene } from "./CubeSides";

export let blocks = [];
//Corner Piece
for (let i = -1; i < 2; i += 2) {
  for (let j = -1; j < 2; j += 2) {
    for (let k = -1; k < 2; k += 2) {
      blocks.push(new CornerPiece(i * 12, j * 12, k * 12));
    }
  }
}

//Center Piece
for (let i = -1; i < 2; i += 2) {
  blocks.push(new CenterPiece(i * 12, 0, 0));
}
for (let i = -1; i < 2; i += 2) {
  blocks.push(new CenterPiece(0, i * 12, 0));
}
for (let i = -1; i < 2; i += 2) {
  blocks.push(new CenterPiece(0, 0, i * 12));
}

//Edge Piece
for (let i = -1; i < 2; i += 2) {
  for (let j = -1; j < 2; j += 2) {
    blocks.push(new EdgePiece(0, i * 12, j * 12));
    blocks.push(new EdgePiece(i * 12, 0, j * 12));
    blocks.push(new EdgePiece(i * 12, j * 12, 0));
  }
}

for (let i = 0; i < 26; i++) {
  blocks[i].display();
}

const innercubegeo = new THREE.BoxGeometry(34.5, 34.5, 34.5);
var innercubemat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const innercube = new THREE.Mesh(innercubegeo, innercubemat);
scene.add(innercube);

