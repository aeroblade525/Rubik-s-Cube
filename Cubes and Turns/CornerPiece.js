import { Cubical } from "./CubicalBase";
import { worldAxisX, worldAxisY, worldAxisZ } from "./Reuseable/WorldAxis";
import { TPerm } from "../Algorithm/Cube Algotithms/Tperm";

export class CornerPiece extends Cubical {
  constructor(xpos, ypos, zpos) {
    super(xpos, ypos, zpos);
    this.rotateCubeLCW = false;
    this.rotateCubeLCCW = false;
    this.rotateCubeRCW = false;
    this.rotateCubeRCCW = false;
    this.rotateCubeFCW = false;
    this.rotateCubeFCCW = false;
    this.rotateCubeBCW = false;
    this.rotateCubeBCCW = false;
    this.rotateCubeUCW = false;
    this.rotateCubeUCCW = false;
    this.rotateCubeDCW = false;
    this.rotateCubeDCCW = false;
  }

  rotation() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "1" && this.xpos <= -6) this.rotateCubeLCW = true;
      if (event.key === "3" && this.xpos >= 6) this.rotateCubeRCW = true;
      if (event.key === "4" && this.zpos >= 6) this.rotateCubeFCW = true;
      if (event.key === "6" && this.zpos <= -6) this.rotateCubeBCW = true;
      if (event.key === "7" && this.ypos >= 6) this.rotateCubeUCW = true;
      if (event.key === "9" && this.ypos <= -6) this.rotateCubeDCW = true;
      if (event.key === "q" && this.xpos <= -6) this.rotateCubeLCCW = true;
      if (event.key === "e" && this.xpos >= 6) this.rotateCubeRCCW = true;
      if (event.key === "r" && this.zpos >= 6) this.rotateCubeFCCW = true;
      if (event.key === "y" && this.zpos <= -6) this.rotateCubeBCCW = true;
      if (event.key === "u" && this.ypos >= 6) this.rotateCubeUCCW = true;
      if (event.key === "o" && this.ypos <= -6) this.rotateCubeDCCW = true;
      if (event.key === "g") {
        TPerm(this);
      }
    });

    if (this.rotateCubeLCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
      this.rotateCubeLCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeRCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
      this.rotateCubeRCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeFCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
      this.rotateCubeFCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeBCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
      this.rotateCubeBCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeUCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
      this.rotateCubeUCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeDCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
      this.rotateCubeDCW = false;
      this.updatePosition();
    }

    if (this.rotateCubeLCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, -Math.PI / 2);
      this.rotateCubeLCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeRCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisX, Math.PI / 2);
      this.rotateCubeRCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeFCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, Math.PI / 2);
      this.rotateCubeFCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeBCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisZ, -Math.PI / 2);
      this.rotateCubeBCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeUCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, Math.PI / 2);
      this.rotateCubeUCCW = false;
      this.updatePosition();
    }
    if (this.rotateCubeDCCW) {
      this.lineGroup.rotateOnWorldAxis(worldAxisY, -Math.PI / 2);
      this.rotateCubeDCCW = false;
      this.updatePosition();
    }
  }
}
