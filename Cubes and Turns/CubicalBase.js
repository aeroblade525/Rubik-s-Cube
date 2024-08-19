import * as THREE from "three";
import { Cubesides, scene } from "./CubeSides.js";

export class Cubical {
  constructor(xpos, ypos, zpos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.zpos = zpos;
    this.cube = null;
    this.linePts = [];
    this.linex = null;
    this.liney = null;
    this.linez = null;
    this.lineGroup = null;
    this.allsides = null;
  }

  display() {
    this.fullCube = new THREE.Group();
    var geometry = new THREE.BoxGeometry(11.4, 11.4, 11.4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x202121,
    });
    this.cube = new THREE.Mesh(geometry, cubeMaterial);
    this.cube.position.set(this.xpos, this.ypos, this.zpos);
    this.allsides = Cubesides(this.xpos, this.ypos, this.zpos);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0000ff });
    this.linePts.push(new THREE.Vector3(0, 0, 0));
    this.linePts.push(new THREE.Vector3(0, 12, 0));
    this.linePts.push(new THREE.Vector3(0, 0, 12));
    this.linePts.push(new THREE.Vector3(12, 0, 0));
    this.linePts.push(new THREE.Vector3(0, 12, 0));
    const lineGeo = new THREE.BufferGeometry().setFromPoints(this.linePts);
    this.lineGroup = new THREE.Group();
    this.linex = new THREE.Line(lineGeo, lineMat);
    this.liney = new THREE.Line(lineGeo, lineMat);
    this.linez = new THREE.Line(lineGeo, lineMat);
    this.lineGroup.add(this.linex);
    this.lineGroup.add(this.liney);
    this.lineGroup.add(this.linez);
    this.lineGroup.add(this.cube);
    this.lineGroup.add(this.allsides);
    scene.add(this.lineGroup);
  }

  updatePosition() {
    const newPos = new THREE.Vector3();
    this.cube.getWorldPosition(newPos);
    this.xpos = Math.round(newPos.x);
    this.ypos = Math.round(newPos.y);
    this.zpos = Math.round(newPos.z);
  }
}
